import React from "react";
import Link from "next/link";

import Button from "@/components/basic/button";
import { EXTERNAL_LINKS } from "@/constant";

import styles from "./style.module.scss";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const Hero: React.FC = () => {
  const { locale } = useRouter();
  const { t } = useTranslation("");

  return (
    <section id="hero" className={styles.wrapper}>
      <video
        id="video-tag"
        muted
        loop
        autoPlay
        playsInline
        preload="auto"
        width={"100%"}
        className={styles.video}
        poster="/videos/thumbnail.png"
      >
        <source src="/videos/coverVideo.webm" type="video/webm" className={styles.video} />
        <source src="/videos/coverVideo.mp4" type="video/mp4" className={styles.video} />
      </video>
      <div className={styles.textPosition}>
        <div className={styles.heroTitle} dir={locale === "he" ? "rtl" : "ltr"}>
          <span className={styles.greyArea}>{t("hero-title1")}</span>
          <span className={styles.gradientArea}>{t("hero-title2")}</span>
        </div>
        <div className={styles.heroDescription} dir={locale === "he" ? "rtl" : "ltr"}>
          <p>{t("hero-slogan")}</p>
        </div>
        <div className={styles.buttonWrapper}>
          <Link href={`${EXTERNAL_LINKS.login}/${locale}/auth/register`}>
            <Button className={styles.button}>{t("get-protect")}</Button>
          </Link>
          <Link href={`${EXTERNAL_LINKS.login}/${locale}/auth/register`}>
            <div className={styles.freeScanButtonBorder}>
              <Button className={styles.freeScanButton}>{t("free-scan")}</Button>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
