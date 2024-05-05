import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import styles from "./style.module.scss";
import ReviewBackground from "@/assets/img/svg/reviewBg.svg";
import author1 from "@/assets/img/png/review1.png";
import author2 from "@/assets/img/png/review2.png";
import author3 from "@/assets/img/png/review3.png";
import author4 from "@/assets/img/png/review4.png";
import author5 from "@/assets/img/png/review5.png";
import author6 from "@/assets/img/png/review6.png";
import author7 from "@/assets/img/png/review7.png";
import author8 from "@/assets/img/png/review8.png";
import ReviewCard from "../../../module/reviewCard";
import CustomCarousel from "../../../basic/customCarousel";

const reviewData = [
  {
    name: "Aidara Fox",
    image: author1,
    country: "USA",
    date: "Sep 09, 2023",
    description:
      "Monthly reminder there are people stealing our content every minute, thankfully @Safespace is scanning the web every second to keep up with them !!!! Over 10 million takedowns with them so far !!",
  },
  {
    name: "Aidara Fox",
    image: author2,
    country: "USA",
    date: "Sep 09, 2023",
    description:
      "Monthly reminder there are people stealing our content every minute, thankfully @Safespace is scanning the web every second to keep up with them !!!! Over 10 million takedowns with them so far !!",
  },
  {
    name: "Aidara Fox",
    image: author3,
    country: "USA",
    date: "Sep 09, 2023",
    description:
      "Monthly reminder there are people stealing our content every minute, thankfully @Safespace is scanning the web every second to keep up with them !!!! Over 10 million takedowns with them so far !!",
  },
  {
    name: "Aidara Fox",
    image: author4,
    country: "USA",
    date: "Sep 09, 2023",
    description:
      "Monthly reminder there are people stealing our content every minute, thankfully @Safespace is scanning the web every second to keep up with them !!!! Over 10 million takedowns with them so far !!",
  },
  {
    name: "Aidara Fox",
    image: author5,
    country: "USA",
    date: "Sep 09, 2023",
    description:
      "Monthly reminder there are people stealing our content every minute, thankfully @Safespace is scanning the web every second to keep up with them !!!! Over 10 million takedowns with them so far !!",
  },
];

const Review: React.FC = () => {
  const { locale } = useRouter();
  const { t } = useTranslation("");
  return (
    <div className={styles.wrapper}>
      <ReviewBackground className={styles.background} />
      <div className={styles.context}>
        <p className={styles.title}>{t("review-title")}</p>
        <p className={styles.description}>{t("review-description")}</p>
        <div className={styles.authorWrapper}>
          <Image src={author1} alt="img" className="z-8" />
          <Image src={author2} alt="img" className="z-7" />
          <Image src={author3} alt="img" className="z-6" />
          <Image src={author4} alt="img" className="z-5" />
          <Image src={author5} alt="img" className="z-4" />
          <Image src={author6} alt="img" className="z-3" />
          <Image src={author7} alt="img" className="z-2" />
          <Image src={author8} alt="img" className="z-1" />
        </div>
      </div>
      <div className={styles.carouselWrapper}>
        <CustomCarousel direction={locale === "he" ? "rtl" : "ltr"} carouselId="reviewCarousel" loop={true}>
          {reviewData.map((item, index) => (
            <ReviewCard data={item} key={index} direction={locale === "he" ? "rtl" : "ltr"} />
          ))}
        </CustomCarousel>
      </div>
    </div>
  );
};

export default Review;
