import React from "react";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

import Button from "@/components/basic/button";
import IntroCardItem from "@/components/module/introCard";
import GridImg1 from "@/assets/img/png/sstop.png";
import GridImg2 from "@/assets/img/png/sstop2.png";
import gridPattern1 from "@/assets/img/png/ssback.png";
import gridPattern2 from "@/assets/img/png/ssback2.png";
import { EXTERNAL_LINKS } from "@/constant";

import styles from "./style.module.scss";

const cards1 = [
  "feature2-section1-card1",
  "feature2-section1-card2",
  "feature2-section1-card3",
  "feature2-section1-card4",
];

const cards2 = ["feature2-section2-card1", "feature2-section2-card2", "feature2-section2-card3"];

const IntroSection2 = () => {
  const { locale } = useRouter();
  const { t } = useTranslation();

  return (
    <section className={styles.wrapper} id="features" dir={locale === "he" ? "rtl" : "ltr"}>
      <h2 className={styles.heading}>Safespace</h2>
      <p className={styles.slogan}>{t("feature2-slogan")}</p>
      <div className={styles.buttonWrapper}>
        <Link href={`${EXTERNAL_LINKS.register}/${locale}/auth/register`}>
          <Button>{t("get-protect")}</Button>
        </Link>
      </div>
      <div className={styles.gridArea}>
        <div className={styles.imageWrapper}>
          <Image src={GridImg1} alt="img" className={styles.image} fill loading="lazy" />
          <Image
            src={gridPattern1}
            alt="img"
            className={classNames(styles.pattern1, { [styles.rightMode]: locale === "he" })}
            fill
            loading="lazy"
          />
        </div>
        <div className={styles.cards}>
          <h3 className={classNames(styles.title, { [styles.rightMode]: locale === "he" })}>
            {t("feature2-section1-title")}
          </h3>
          <Fade cascade direction="up" triggerOnce>
            {cards1.map((item, index) => (
              <IntroCardItem key={index} label={t(item)} />
            ))}
          </Fade>
        </div>
      </div>
      <div className={styles.gridArea}>
        <div className={classNames(styles.cards, "order-2 desktop:order-1")}>
          <h3 className={classNames(styles.title, { [styles.rightMode]: locale === "he" })}>
            {t("feature2-section2-title")}
          </h3>
          <Fade cascade direction="up" triggerOnce>
            {cards2.map((item, index) => (
              <IntroCardItem key={index} label={t(item)} />
            ))}
          </Fade>
        </div>
        <div className={classNames(styles.imageWrapper, "order-1 desktop:order-2")}>
          <Image src={GridImg2} alt="img" className={styles.image} loading="lazy" fill />
          <Image
            src={gridPattern2}
            alt="img"
            className={classNames(styles.pattern2, { [styles.rightMode]: locale === "he" })}
            fill
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default IntroSection2;
