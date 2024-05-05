import React from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";

import styles from "./style.module.scss";
import ProtectCard from "../../../module/protectCard";

import contextImage from "@/assets/img/png/protect.png";
import Background from "@/assets/img/svg/bgProtect.svg";

import SecondBgBackground from "@/assets/img/svg/bgProtectSecond.svg";
import secondProtectContent from "@/assets/img/png/protectSecond.png";

import ThirdBackground from "@/assets/img/svg/bgProtectThird.svg";
import thirdProtectContent from "@/assets/img/png/protectThird.png";

import MobileBackground from "@/assets/img/svg/bgProtectMob.svg";

const content = [
  {
    title: "protect-first-title",
    description: [
      "protect-first-description1",
      "protect-first-description2",
      "protect-first-description3",
      "protect-first-description4",
    ],
    mainImage: secondProtectContent,
    background: SecondBgBackground,
    order: "firstSection",
    mobileBg: MobileBackground,
  },
  {
    title: "protect-second-title",
    description: ["protect-second-description1", "protect-second-description2", "protect-second-description3"],
    mainImage: thirdProtectContent,
    background: ThirdBackground,
    order: "secondSection",
    mobileBg: MobileBackground,
  },
];

const Protect: React.FC = () => {
  const { t } = useTranslation("");
  return (
    <>
      <div className={styles.wrapper}>
        <Background className={styles.background} />
        <div className={styles.context}>
          <p className={styles.title}>{t("protect-title")}</p>
          <p className={styles.description}>{t("protect-description")}</p>
          <Image src={contextImage} alt="img" className={styles.image} />
        </div>
      </div>
      <div className={styles.secondWrapper}>
        {content.map((item, index) => (
          <ProtectCard data={item} key={index} />
        ))}
      </div>
    </>
  );
};

export default Protect;
