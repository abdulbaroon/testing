import React from "react";
import { useTranslation } from "next-i18next";

import styles from "./style.module.scss";
import HelpCard from "../../../module/helpCard";

import mainImage1 from "@/assets/img/png/helpUs1.png";
import mainImage2 from "@/assets/img/png/helpUs2.png";
import mainImage3 from "@/assets/img/png/helpUs3.png";
import mainImage4 from "@/assets/img/png/helpUs4.png";
import background1 from "@/assets/img/png/bgHelp1.png";
import background2 from "@/assets/img/png/bgHelp2.png";
import background3 from "@/assets/img/png/bgHelp3.png";

const helpContext = [
  {
    title: "help-title-1",
    link: "#",
    mainImage: mainImage1,
    background: background1,
  },
  {
    title: "help-title-2",
    link: "#",
    mainImage: mainImage2,
    background: background2,
  },
  {
    title: "help-title-3",
    link: "#",
    mainImage: mainImage3,
    background: background3,
  },
  {
    title: "help-title-4",
    link: "#",
    mainImage: mainImage4,
    background: background1,
  },
];

const HelpUs: React.FC = () => {
  const { t } = useTranslation("");
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>{t("help-us-title")}</p>
      <div className={styles.cardContent}>
        {helpContext.map((item, index) => (
          <HelpCard key={index} data={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default HelpUs;
