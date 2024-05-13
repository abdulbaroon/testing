"use client";
import React from "react";

import IntroSection1 from "./intro1";
import IntroSection2 from "./intro2";

import styles from "./style.module.scss";

const IntroSection = () => {
  return (
    <div className={styles.wrapper}>
      <IntroSection1 />
      <IntroSection2 />
    </div>
  );
};

export default IntroSection;
