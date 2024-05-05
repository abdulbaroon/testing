"use client";
import React, { useState } from "react";

import PlusSVG from "@/assets/img/svg/plus.svg";
import MinusSVG from "@/assets/img/svg/minus.svg";

import styles from "./style.module.scss";
import classNames from "classnames";

type AccordionProps = {
  data: {
    title: string;
    body: string;
  };
};

const AccordionItem: React.FC<AccordionProps> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.header}>
          <p className={styles.title}>{data.title}</p>
          <button className={styles.button} onClick={() => setIsOpen((prev) => !prev)}>
            {!isOpen ? <PlusSVG className={styles.svgIcon} /> : <MinusSVG className={styles.svgIcon} />}
          </button>
        </div>
        <p className={classNames(styles.content, { [styles.active]: isOpen })}>{data.body}</p>
      </div>
    </div>
  );
};

export default AccordionItem;
