import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useTranslation } from "next-i18next";
import { TFunction } from "i18next";
import { useRouter } from "next/router";
import { Fade } from "react-awesome-reveal";
import { AnimatePresence, motion } from "framer-motion";

import CustomCarousel from "@/components/basic/customCarousel";

import styles from "./style.module.scss";
import { scroller } from "react-scroll";

gsap.registerPlugin(ScrollTrigger);

const cards = (t: TFunction<"translation", undefined>) => [
  {
    title: t("feature1-card1-title"),
    body: t("feature1-card1-description"),
  },
  {
    title: t("feature1-card2-title"),
    body: t("feature1-card2-description"),
  },
  {
    title: t("feature1-card3-title"),
    body: t("feature1-card3-description"),
  },
  {
    title: t("feature1-card4-title"),
    body: t("feature1-card4-description"),
  },
];

const IntroSection1: React.FC = () => {
  const { t } = useTranslation();
  const { locale } = useRouter();
  const hiddenRef = useRef<any>();
  const [active, setActive] = useState<number>(0);
  const [activeAnimation, setActiveAnimation] = useState(true);
  const [elementVisible, setElementVisible] = useState(false);

  useEffect(() => {
    const observerSec = new IntersectionObserver((entries) => {
      setElementVisible(entries[0].isIntersecting);
    });
    observerSec.observe(hiddenRef.current);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#how-we-protect",
        start: "top top",
        end: "bottom bottom",
        pin: true,
        pinSpacing: false,
        scrub: 1, // Adjusted scrub value
        snap: 1 / 4,
        onUpdate: (self) => {
          const progress = self.progress;
          const activeItem = parseInt((progress / 0.25).toFixed());
          setActive(activeItem === 4 ? 3 : activeItem);
        },
      },
    });
    return () => {
      timeline.kill();
    };
  }, []);

  useEffect(() => {
    if (elementVisible && activeAnimation) {
      scroller.scrollTo("how-we-protect", {
        duration: 1200,
        smooth: true,
      });
      setActiveAnimation(false);
    }
  }, [elementVisible]);

  return (
    <section>
      <section id="how-we-protect" ref={hiddenRef} dir={locale === "he" ? "rtl" : "ltr"}>
        <div className={styles.mainWrapper}>
          <h2 className={classNames(styles.heading, { [styles.hide]: active !== 0 })}>{t("feature1-title")}</h2>
          <div className={styles.wrapper}>
            <div className={styles.cards}>
              <div className={styles.cardList} id="cards">
                <div className={styles.cardListWrapper}>
                  {cards(t).map((item, index) => (
                    <div
                      key={index}
                      className={classNames(styles.card, {
                        [styles.activeCard]: index === active,
                        [styles.hiddenCard]: index - active < 0,
                        [styles.disabledCard]: index - active > 0,
                      })}
                      style={{ top: `${(index - active) * 264}px` }}
                    >
                      <h5>{item.title}</h5>
                      <p>{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className={classNames(styles.progressbar, {
                  [styles.leftMode]: locale === "he",
                  [styles.rightMode]: locale === "en",
                })}
              >
                <div className={styles.activeBar} style={{ height: 80 * (active + 1) }}></div>
              </div>
            </div>
            <div className={styles.videoArea}>
              <div className={styles.videowrapper}>
                <video
                  id="video-tag"
                  muted
                  loop
                  autoPlay
                  playsInline
                  preload="auto"
                  className={styles.video}
                  src={`/videos/feature_${active + 1}.mp4`}
                ></video>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.mobileWrapper}>
        <h2 className={styles.heading}>{t("feature1-title")}</h2>
        <div className={styles.carousel}>
          <CustomCarousel direction={locale === "he" ? "rtl" : "ltr"}>
            {cards(t).map((item, index) => {
              return (
                <div className={styles.card} key={index}>
                  <div className={styles.cardContent}>
                    <video
                      id={`video-tag-${index}`}
                      muted
                      loop
                      autoPlay
                      playsInline
                      preload="auto"
                      className={styles.video}
                    >
                      <source src={`/videos/feature_${index + 1}.webm`} type="video/webm" />
                      <source src={`/videos/feature_${index + 1}.mp4`} type="video/mp4" />
                    </video>
                    <div className={styles.textWrapper} dir={locale === "he" ? "rtl" : "ltr"}>
                      <h5>{item.title}</h5>
                      <p>{item.body}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </CustomCarousel>
        </div>
      </section>
    </section>
  );
};

export default IntroSection1;
