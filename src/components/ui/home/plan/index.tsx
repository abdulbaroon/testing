"use client";
import React, { useState } from "react";
// import Slider from "react-slick";
import classNames from "classnames";
import { Link } from "react-scroll";
import { useTranslation } from "next-i18next";
import { TFunction } from "i18next";
import { useRouter } from "next/router";
import { CarouselProvider, Slider, Slide, DotGroup } from "pure-react-carousel";

import ToggleButton from "@/components/basic/toggle";
import PlanItem from "@/components/module/planItem";
import Button from "@/components/basic/button";

import styles from "./style.module.scss";
import CustomCarousel from "@/components/basic/customCarousel";

const plans = (t: TFunction<"translation", undefined>) => [
  {
    name: t("plan-starter"),
    monthlyPrice: 45,
    features: {
      [t("plan-scanner")]: true,
      [t("plan-google-search")]: true,
      [t("plan-re-crawler")]: true,
      [t("plan-email-reports")]: true,
      [t("plan-sms")]: false,
    },
    info: {
      [t("plan-scanning-frequency")]: t("plan-once-week"),
      [t("plan-dcma")]: t("plan-unlimited"),
      [t("plan-manual-dcma")]: `1 ${t("plan-per-day")}`,
      [t("plan-social")]: `1 ${t("plan-username")}`,
    },
  },
  {
    name: t("plan-plus"),
    monthlyPrice: 80,
    features: {
      [t("plan-scanner")]: true,
      [t("plan-google-search")]: true,
      [t("plan-re-crawler")]: true,
      [t("plan-email-reports")]: true,
      [t("plan-sms")]: true,
    },
    info: {
      [t("plan-scanning-frequency")]: t("plan-daily"),
      [t("plan-dcma")]: t("plan-unlimited"),
      [t("plan-manual-dcma")]: `10 ${t("plan-per-day")}`,
      [t("plan-social")]: `1 ${t("plan-username")}`,
    },
  },
  {
    name: t("plan-pro"),
    monthlyPrice: 120,
    features: {
      [t("plan-scanner")]: true,
      [t("plan-google-search")]: true,
      [t("plan-re-crawler")]: true,
      [t("plan-email-reports")]: true,
      [t("plan-sms")]: true,
    },
    info: {
      [t("plan-scanning-frequency")]: t("plan-once-week"),
      [t("plan-dcma")]: t("plan-unlimited"),
      [t("plan-manual-dcma")]: `50 ${t("plan-per-day")}`,
      [t("plan-social")]: `2 ${t("plan-username")}`,
    },
  },
  {
    name: t("plan-ultimate"),
    monthlyPrice: 180,
    features: {
      [t("plan-scanner")]: true,
      [t("plan-google-search")]: true,
      [t("plan-re-crawler")]: true,
      [t("plan-email-reports")]: true,
      [t("plan-sms")]: true,
    },
    info: {
      [t("plan-scanning-frequency")]: t("plan-once-week"),
      [t("plan-dcma")]: t("plan-unlimited"),
      [t("plan-manual-dcma")]: t("plan-unlimited"),
      [t("plan-social")]: `4 ${t("plan-username")}`,
    },
  },
];

const Plan = () => {
  const [plan, setPlan] = useState<string>("MONTHLY");
  const { locale } = useRouter();
  const { t } = useTranslation();

  return (
    <section id="pricing" className={styles.wrapper} dir={locale === "he" ? "rtl" : "ltr"}>
      <div>
        <h3 className={styles.heading}>{t("plan-title")}</h3>
        <div className={styles.periodWrapper}>
          <div className={styles.toggle}>
            <ToggleButton
              values={[
                { label: t("plan-monthly"), value: "MONTHLY" },
                { label: t("plan-three-months"), value: "THREE_MONTHS" },
              ]}
              active={plan}
              setActive={setPlan}
            />
            <div
              className={classNames(styles.tooltip, {
                [styles.active]: plan === "THREE_MONTHS",
                [styles.rightMode]: locale === "he",
                [styles.leftMode]: locale !== "he",
              })}
            >
              <span className={styles.saveText}>{t("plan-save")}</span> <span className={styles.minusText}>-</span> 20%
            </div>
          </div>
        </div>
      </div>
      <p className={styles.slogan}>{t("plan-slogan")}</p>
      <div className={styles.plans}>
        {plans(t).map((item, index) => (
          <PlanItem data={item} type={plan as "MONTHLY" | "THREE_MONTHS"} key={index} isActive={index === 2} />
        ))}
      </div>
      <div className={styles.mobilePlan}>
        <CustomCarousel direction={locale === "he" ? "rtl" : "ltr"}>
          {plans(t).map((item, index) => (
            <div key={index}>
              <div className={styles.planWrapper}>
                <PlanItem data={item} type={plan as "MONTHLY" | "THREE_MONTHS"} key={index} isActive={index === 2} />
              </div>
            </div>
          ))}
        </CustomCarousel>
      </div>
      <div className={classNames(styles.customPlanArea, { [styles.rightMode]: locale === "he" })}>
        <div className={styles.description}>
          {t("plan-custom-plan-description-part1")}{" "}
          <span className={styles.link}>{t("plan-custom-plan-description-part2")}</span>{" "}
          {t("plan-custom-plan-description-part3")}
        </div>
        <Link to="support" duration={500} smooth={true} className={styles.link}>
          <Button className={styles.button}>{t("plan-get-in-touch")}</Button>
        </Link>
      </div>
    </section>
  );
};

export default Plan;
