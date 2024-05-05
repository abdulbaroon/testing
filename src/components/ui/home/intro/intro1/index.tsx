import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useTranslation } from "next-i18next";
import { TFunction } from "i18next";
import { useRouter } from "next/router";
import CustomCarousel from "@/components/basic/customCarousel";
import styles from "./style.module.scss";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";

// gsap.registerPlugin(ScrollTrigger);

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
  const mainRef = useRef<any>();
  const [currentVideoSrc, setCurrentVideoSrc] = useState<string>(`/videos/feature_1.mp4`);

  useEffect(() => {
    const updateVideoSrc = (pos: number) => {
      let videoIndex = 1;
      if (pos <= 0.25) {
        videoIndex = 1;
      } else if (pos <= 0.38) {
        videoIndex = 2;
      } else if (pos <= 0.42) {
        videoIndex = 3;
      } else if (pos <= 0.48) {
        videoIndex = 4;
      }
      setCurrentVideoSrc(`/videos/feature_${videoIndex}.mp4`);
    };

    const scrollListener = () => {
      const pos = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      updateVideoSrc(pos);
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  const { scrollYProgress: scrollYProgressbar } = useScroll({
    target: mainRef,
    offset: ["start end", "end"],
  });

  const { scrollYProgress: scroll } = useScroll({
    target: mainRef,
    offset: ["start start", "end end"],
  });

  const y = useTransform(scroll, [0, 1], ["0vh", "400vh"]);
  const opacity1 = useTransform(scroll, [0, 0.25], [1, 0]);
  const opacity2 = useTransform(scroll, [0, 0.25, 0.5], [0.2, 1, 0]);
  const opacity3 = useTransform(scroll, [0, 0.25, 0.5, 0.75], [0, 0.1, 1, 0]);
  const opacity4 = useTransform(scroll, [0.25, 0.5, 0.75, 1], [0, 0.1, 1, 1]);

  const Transform1 = useTransform(scroll, [0, 0.25], ["5vh", "-36vh"]);
  const Transform2 = useTransform(scroll, [0.25, 0.5, 0.75], ["-30vh", "-72vh", "-72vh"]);
  const Transform3 = useTransform(scroll, [0.5, 0.75, 1], ["-68vh", "-108vh", "-108vh"]);

  const change = useTransform(scroll, (pos: number) => {
    if (pos <= 0.25) {
      return 1;
    } else if (pos <= 0.5) {
      return 2;
    } else if (pos <= 0.75) {
      return 3;
    } else {
      return 4;
    }
  });

  const opacities = (index: number) => {
    if (index === 0) {
      return opacity1;
    } else if (index === 1) {
      return opacity2;
    } else if (index === 2) {
      return opacity3;
    } else if (index === 3) {
      return opacity4;
    }
  };
  const transform = (index: number) => {
    if (index === 0) {
      return 0;
    } else if (index === 1) {
      return Transform1;
    } else if (index === 2) {
      return Transform2;
    } else if (index === 3) {
      return Transform3;
    }
  };

  return (
    <section ref={mainRef}>
      <section id="how-we-protect" dir={locale === "he" ? "rtl" : "ltr"}>
        <div className={styles.topWrapper}>
          <motion.div
            style={{ translateY: y }}
            transition={{
              x: { type: "spring", stiffness: 100 },
              duration: 0,
              delay: 0,
            }}
            className={styles.mainWrapper}
          >
            <h2 className={styles.heading}>{t("feature1-title")}</h2>
            <div className={styles.wrapper}>
              <div className={styles.cards}>
                <div className={styles.cardList} id="cards">
                  <div className={styles.cardListWrapper}>
                    {cards(t).map((item, index) => (
                      <motion.div
                        key={index}
                        className={classNames(styles.card)}
                        style={{ top: `${index * 264}px`, opacity: opacities(index), y: transform(index) }}
                      >
                        <h5>{item.title}</h5>
                        <p>{item.body}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div
                  className={classNames(styles.progressbar, {
                    [styles.leftMode]: locale === "he",
                    [styles.rightMode]: locale === "en",
                  })}
                >
                  <motion.div
                    className={styles.activeBar}
                    style={{ scaleY: scrollYProgressbar, transformOrigin: "top" }}
                  ></motion.div>
                </div>
              </div>
              <div className={styles.videoArea}>
                <div className={styles.videowrapper}>
                  <AnimatePresence>
                    <motion.video
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      key={currentVideoSrc}
                      id="video-tag"
                      muted
                      loop
                      autoPlay
                      playsInline
                      preload="auto"
                      className={styles.video}
                      src={currentVideoSrc}
                    ></motion.video>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
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
