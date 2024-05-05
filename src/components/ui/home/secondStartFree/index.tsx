import React from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

import styles from "./style.module.scss";
import Button from "../../../basic/button";

import Check from "@/assets/img/svg/whiteCheck.svg";
import mobileBackground from "@/assets/img/png/secondFreeBgMob.png";
import background from "@/assets/img/png/secondFreeStartBg.png";

const options = [
  "free-scan-content1",
  "free-scan-content2",
  "free-scan-content3",
  "free-scan-content4",
  "free-scan-content5",
  "free-scan-content6",
];

const SecondStartFree: React.FC = () => {
  const { locale } = useRouter();
  const { t } = useTranslation("");
  return (
    <div className={styles.wrapper}>
      <Image src={background} alt="img" className={styles.background} />
      <Image src={mobileBackground} alt="img" className={styles.mobileBackground} />
      <div className={styles.content}>
        <p className={styles.title}>{t("free-start-title")}</p>
        <Button className={styles.scanButton}>{t("free-scan-button")}</Button>
        <div className={styles.items} dir={locale === "he" ? "rtl" : "ltr"}>
          {options.map((item, index) => (
            <div key={index} className={styles.option}>
              <Check />
              <p className={styles.description}>{t(item)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondStartFree;
