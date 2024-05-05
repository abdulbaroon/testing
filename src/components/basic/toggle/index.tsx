import React from "react";
import classNames from "classnames";
import { useRouter } from "next/router";

import styles from "./style.module.scss";

type ToggleButtonProps = {
  values: {
    label: string;
    value: string;
  }[];
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
};

const ToggleButton: React.FC<ToggleButtonProps> = ({ values, active, setActive }) => {
  const { locale } = useRouter();
  return (
    <div
      className={classNames(styles.wrapper, {
        [styles.rightMode]: locale === "he",
        [styles.leftMode]: locale !== "he",
      })}
    >
      {values.map((item, index) => (
        <div
          key={index}
          role="button"
          className={classNames(styles.button, { [styles.active]: active === item.value })}
          onClick={() => setActive(item.value)}
        >
          {item.label}
        </div>
      ))}
      <div className={classNames(styles.activePanel, { [styles.activeSecond]: active === "THREE_MONTHS" })}></div>
    </div>
  );
};

export default ToggleButton;
