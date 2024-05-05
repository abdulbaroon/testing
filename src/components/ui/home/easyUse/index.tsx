import React from "react";
import { useTranslation } from "next-i18next";
import classNames from "classnames";
import { useRouter } from "next/router";

import styles from "./style.module.scss";

import EasyUseItem from "../../../module/easyUseItem";
import EasyUse1 from "@/assets/img/png/easyUse1.png";
import EasyUse2 from "@/assets/img/png/easyUse2.png";
import EasyUse3 from "@/assets/img/png/easyUse3.png";
import EasyUse4 from "@/assets/img/png/easyUse4.png";

const mainContext = [
  {
    number: "01",
    title: "easy-use-grid1-title",
    description: "easy-use-grid1-description",
    leftPosition: true,
    topPosition: "top",
    image: EasyUse1,
  },
  {
    number: "02",
    title: "easy-use-grid2-title",
    description: "easy-use-grid2-description",
    leftPosition: false,
    topPosition: "center",
    image: EasyUse2,
  },
  {
    number: "03",
    title: "easy-use-grid3-title",
    description: "easy-use-grid3-description",
    leftPosition: true,
    topPosition: "center",
    image: EasyUse3,
  },
  {
    number: "04",
    title: "easy-use-grid4-title",
    description: "easy-use-grid4-description",
    leftPosition: false,
    topPosition: "bottom",
    image: EasyUse4,
  },
];

const EasyUse: React.FC = () => {
  const { locale } = useRouter();
  const { t } = useTranslation("");
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <p className={styles.title}>{t("easy-use-title")}</p>
        <div
          className={classNames(styles.itemWrapper, {
            [styles.rightMode]: locale === "he",
            [styles.leftMode]: locale !== "he",
          })}
        >
          {mainContext.map((item, index) => (
            <EasyUseItem data={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EasyUse;
