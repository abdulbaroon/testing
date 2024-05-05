"use client";
import React, { useState } from "react";
import classNames from "classnames";
import { useRouter } from "next/router";

import MinusSVG from "@/assets/img/svg/minus.svg";
import PlusSVG from "@/assets/img/svg/plus.svg";

import styles from "./style.module.scss";

type HelpAreaCardProps = {
  index?: number;
  title: string;
  SvgImage: any;
  hoverText: string;
};

const HelpAreaCard: React.FC<HelpAreaCardProps> = ({ index, title, SvgImage, hoverText }) => {
  const { locale } = useRouter();
  const [active, setActive] = useState(false);

  return (
    <div
      dir={locale === "he" ? "rtl" : "ltr"}
      role="button"
      className={classNames(styles.wrapper, { [styles.active]: active })}
    >
      <div className={styles.header}>
        <h3
          dangerouslySetInnerHTML={{ __html: title }}
          className={classNames(styles.title, {
            ["desktop:top-8 desktop:left-8"]: index === 0,
            ["desktop:top-8 desktop:right-8"]: index === 1,
            ["desktop:bottom-8 desktop:left-8"]: index === 2,
            ["desktop:bottom-8 desktop:right-8"]: index === 3,
          })}
        />
        <div role="button" className={styles.actionButton} onClick={() => setActive((prev) => !prev)}>
          {active ? <MinusSVG className={styles.svg} /> : <PlusSVG className={styles.svg} />}
        </div>
      </div>
      <p className={styles.hoverText}>{hoverText}</p>
      <SvgImage
        className={classNames(styles.svgImage, {
          [styles.rightMode]: locale === "he",
          [styles.leftMode]: locale !== "he",
          [styles.even]: index === 0 || index === 2,
          [styles.odd]: index === 1 || index === 3,
        })}
      />
    </div>
  );
};

export default HelpAreaCard;
