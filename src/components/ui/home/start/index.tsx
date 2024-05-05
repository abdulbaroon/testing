import React from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

import styles from "./style.module.scss";
import Button from "../../../basic/button";

import WrapperImage from "@/assets/img/svg/freeStartWrapper.svg";
import Check from "@/assets/img/svg/whiteCheck.svg";
import MobileRowLine from "@/assets/img/svg/startFreeRowLine.svg";

import RoundBottomLeft from "@/assets/img/svg/roundBottomLeft.svg";
import RoundBottomRight from "@/assets/img/svg/roundBottomRight.svg";
import RoundTopLeft from "@/assets/img/svg/roundTopLeft.svg";
import RoundTopRight from "@/assets/img/svg/roundTopRight.svg";
import roundBottom from "@/assets/img/png/roundBottom.png";
import roundBottomMobile from "@/assets/img/png/roundBottomMobile.png";
import roundBottomLeftMob from "@/assets/img/png/roundBottomLeftMob.png";
import roundBottomRightMob from "@/assets/img/png/roundBottomRightMob.png";
import roundTopLeftMob from "@/assets/img/png/roundTopLeftMob.png";
import roundTopRightMob from "@/assets/img/png/roundTopRightMob.png";
import MobileBackground from "@/assets/img/svg/startFreeMobileBg.svg";

const options = [
  "free-scan-content1",
  "free-scan-content2",
  "free-scan-content3",
  "free-scan-content4",
  "free-scan-content5",
  "free-scan-content6",
];

const StartFree: React.FC = () => {
  const { locale } = useRouter();
  const { t } = useTranslation("");
  return (
    <div className={styles.wrapper}>
      <WrapperImage className={styles.background} />
      <MobileBackground className={styles.mobileBackground} />
      <div className={styles.content}>
        <div className={styles.roundSection}>
          <RoundBottomLeft className={styles.roundBottomLeft} />
          <RoundBottomRight className={styles.roundBottomRight} />
          <RoundTopLeft className={styles.roundTopLeft} />
          <RoundTopRight className={styles.roundTopRight} />
        </div>
        <div className={styles.roundSectionMob}>
          <Image src={roundBottomLeftMob} className={styles.roundBottomLeft} alt="mobile round" />
          <Image src={roundBottomRightMob} className={styles.roundBottomRight} alt="mobile round" />
          <Image src={roundTopLeftMob} className={styles.roundTopLeft} alt="mobile round" />
          <Image src={roundTopRightMob} className={styles.roundTopRight} alt="mobile round" />
        </div>
        <p className={styles.title}>{t("free-start-title")}</p>
        <div className={styles.context}>
          <Button className={styles.scanButton}>{t("free-scan-button")}</Button>
          <Image src={roundBottom} alt="img" className={styles.roundBottom} />
          <Image src={roundBottomMobile} alt="img" className={styles.roundBottomMobile} />
          <div className={styles.items} dir={locale === "he" ? "rtl" : "ltr"}>
            <MobileRowLine alt="start free row line" className="w-full mt-5 block tablet:hidden" />
            {options.map((item, index) => (
              <div key={index} className={styles.option}>
                <Check />
                <p className={styles.description}>{t(item)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartFree;
