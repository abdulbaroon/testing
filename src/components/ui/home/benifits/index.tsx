import React from "react";
// import Slider from "react-slick";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { CarouselProvider, Slider, Slide, DotGroup } from "pure-react-carousel";

import BgPattern from "@/assets/img/svg/bgPattern.svg";
import EasySVG from "@/assets/img/svg/easy.svg";
import SecuritySVG from "@/assets/img/svg/security.svg";
import ConrolSVG from "@/assets/img/svg/control.svg";

import styles from "./style.module.scss";
import classNames from "classnames";
import CustomCarousel from "@/components/basic/customCarousel";

const benifits = [
  {
    title: "benifits-grid1-title",
    icon: EasySVG,
    description: "benifits-grid1-paragraph",
  },
  {
    title: "benifits-grid2-title",
    icon: SecuritySVG,
    description: "benifits-grid2-paragraph",
  },
  {
    title: "benifits-grid3-title1",
    icon: ConrolSVG,
    description: "benifits-grid3-paragraph",
  },
];

const Benifits = () => {
  const { locale } = useRouter();
  const { t } = useTranslation();

  return (
    <section className={styles.wrapper} dir={locale === "he" ? "rtl" : "ltr"}>
      <div>
        <Fade triggerOnce direction="up">
          <h2 className={styles.desktopHeading}>{t("benifits-title")}</h2>
        </Fade>
        <div className={styles.desktop}>
          <div className={styles.tabletHeading}>
            <p dangerouslySetInnerHTML={{ __html: t("benifits-title-breaked") }} />
          </div>
          <Fade triggerOnce cascade direction="up">
            {benifits.map((item, index) => (
              <div key={index} className={styles.gridItem}>
                <div className={classNames(styles.gridItemContents, { [styles.rightMode]: locale === "he" })}>
                  <div className={styles.itemHeader}>
                    <h5 dangerouslySetInnerHTML={{ __html: t(item.title) }} className={styles.title} />
                    <item.icon className={styles.icon} />
                  </div>
                  <p className={styles.description}>{t(item.description)}</p>
                </div>
                <BgPattern className={classNames(styles.background, { [styles.rightMode]: locale === "he" })} />
              </div>
            ))}
          </Fade>
        </div>
      </div>
      <div className={styles.mobile}>
        <h5 className={styles.heading}>{t("benifits-title")}</h5>
        <div className={styles.carousel}>
          {/* <CarouselProvider naturalSlideWidth={90} naturalSlideHeight={70} totalSlides={3} visibleSlides={1.1}>
            <Slider> */}
          <CustomCarousel direction={locale === "he" ? "rtl" : "ltr"}>
            {benifits.map((item, index) => (
              <div className={styles.gridItem} key={index}>
                <div className="px-2">
                  <div className={styles.gridItemContents}>
                    <div className={styles.itemHeader}>
                      <h5 dangerouslySetInnerHTML={{ __html: t(item.title) }} className={styles.title} />
                      <item.icon className={styles.icon} />
                    </div>
                    <p className={styles.description} dir={locale === "he" ? "rtl" : "ltr"}>
                      {t(item.description)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </CustomCarousel>
          {/* </Slider>
            <DotGroup />
          </CarouselProvider> */}
        </div>
      </div>
    </section>
  );
};

export default Benifits;
