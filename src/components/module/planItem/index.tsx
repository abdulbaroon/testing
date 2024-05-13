import React from "react";
import classNames from "classnames";
import { useTranslation } from "next-i18next";

import Button from "@/components/basic/button";

import styles from "./style.module.scss";

type PlanItemProps = {
  activeCard?: boolean;
  isActive?: boolean;
  type?: "MONTHLY" | "THREE_MONTHS";
  data: {
    name: string;
    monthlyPrice: number;
    features: { [key: string]: boolean };
    info: { [key: string]: string };
  };
};

const PlanItem: React.FC<PlanItemProps> = ({ data, isActive, type, activeCard }) => {
  const { t } = useTranslation("");
  return (
    <div className={classNames(styles.wrapper, { [styles.active]: isActive, [styles.activeCard]: activeCard })}>
      <div className={classNames(styles.header)}>
        <div className={styles.btnWrapper}>
          <button className={classNames(styles.btn, { [styles.activeBtn]: isActive })}>Most popular</button>
          <p className={styles.name}>{data.name}</p>
        </div>
        <p className={styles.price}>
          <span className={styles.value}>
            {type === "THREE_MONTHS" ? data.monthlyPrice * 3 * 0.8 : data.monthlyPrice}$
          </span>
          <br />/ {type === "THREE_MONTHS" && 3} {t("plan-month")}
        </p>
      </div>
      <div className={styles.body}>
        {type === "THREE_MONTHS" && (
          <div className={styles.badge}>
            Save {data.monthlyPrice * 0.2}$ / {t("plan-month")}
          </div>
        )}
        {Object.keys(data.features).map((item, index) => (
          <div className={styles.feature} key={index}>
            <div className={classNames(styles.check, { [styles.active]: data.features?.[item] })}>
              <div className={styles.mark}></div>
            </div>
            {item}
          </div>
        ))}
        {Object.keys(data.info).map((item, index) => (
          <div className={styles.info} key={index}>
            <p>{item}</p>
            <p className={styles.infoData}>{data.info?.[item]}</p>
          </div>
        ))}
      </div>
      <Button className={styles.button}>{t("plan-get-started")}</Button>
    </div>
  );
};

export default PlanItem;
