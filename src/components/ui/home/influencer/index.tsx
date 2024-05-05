import React from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import classNames from "classnames";
import Image from "next/image";

import CustomCarousel from "../../../basic/customCarousel";
import styles from "./style.module.scss";
import Influencer1 from "@/assets/img/png/infulencer1.png";
import Influencer2 from "@/assets/img/png/infulencer2.png";
import Influencer3 from "@/assets/img/png/infulencer3.png";
import Influencer4 from "@/assets/img/png/infulencer4.png";
import Influencer5 from "@/assets/img/png/infulencer5.png";
import Influencer6 from "@/assets/img/png/infulencer6.png";
import BgInfluencer from "@/assets/img/svg/bgInfluencer.svg";

const userData = [
  {
    image: Influencer1,
  },
  {
    image: Influencer2,
  },
  {
    image: Influencer3,
  },
  {
    image: Influencer4,
  },
  {
    image: Influencer5,
  },
  {
    image: Influencer6,
  },
];

const UserRecommend = () => {
  const { locale } = useRouter();
  const { t } = useTranslation();
  return (
    <div className={styles.wrapper}>
      <BgInfluencer className={styles.background} />
      <p className={styles.title}>{t("influencers-recommendations")}</p>
      <div className={styles.carouselWrapper}>
        <CustomCarousel direction={locale === "he" ? "rtl" : "ltr"} loop={true}>
          {userData.map((item, index) => (
            <div
              className={classNames(styles.gridItem, {
                [styles.pairItem]: index % 2 === 0 ? false : true,
              })}
              key={index}
            >
              <Image src={item.image} alt="img" className={styles.image} />
            </div>
          ))}
        </CustomCarousel>
      </div>
    </div>
  );
};

export default UserRecommend;
