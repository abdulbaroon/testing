import React from "react";

import styles from "./style.module.scss";
import { useRouter } from "next/router";

type IntroCardItemProps = {
  label: string;
};

const IntroCardItem: React.FC<IntroCardItemProps> = ({ label }) => {
  const { locale } = useRouter();

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <p className={styles.label} dir={locale === "he" ? "rtl" : "ltr"}>
          {label}
        </p>
        <div className={styles.check}>
          <div className={styles.mark}></div>
        </div>
      </div>
      <div className={styles.pattern}></div>
    </div>
  );
};

export default IntroCardItem;
