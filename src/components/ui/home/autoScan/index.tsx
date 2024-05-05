import React from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";

import Button from "../../../basic/button";

import styles from "./style.module.scss";
import mainImage from "@/assets/img/png/autoScanMain.png";
import mainImageTablet from "@/assets/img/png/autoScanMainTablet.png";
import background from "@/assets/img/png/bgAutoScan.png";
const AutoScan: React.FC = () => {
  const { t } = useTranslation("");
  return (
    <div className={styles.wrapper}>
      <div className={styles.context}>
        <p className={styles.title}>{t("auto-scan-title")}</p>
        <p className={styles.description}>{t("auto-scan-description")}</p>
        <div className={styles.buttonWrapper}>
          <Button className={styles.protectButton}>{t("get-protect")}</Button>
          <div className={styles.freeScanButtonBorder}>
            <Button className={styles.freeScanButton}>{t("free-scan")}</Button>
          </div>
        </div>
        <Image src={mainImage} alt="img" className={styles.image} />
        <div className={styles.imageTablet}>
          <Image src={mainImageTablet} alt="img" className={styles.mainImageTablet} />
        </div>
        <Image src={background} alt={"background"} className={styles.backgroundImage} />
      </div>
    </div>
  );
};

export default AutoScan;
