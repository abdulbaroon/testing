import React from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { TFunction } from "i18next";

import AccordionItem from "@/components/basic/accordion";

import styles from "./style.module.scss";
import FaqBackground from "@/assets/img/svg/faqBg.svg";
import FaqMobileBackground from "@/assets/img/svg/faqBgMobile.svg";
const faqs = (t: TFunction<"translation", undefined>) => [
  {
    title: t("faq-item1-title"),
    body: t("faq-item1-body"),
  },
  {
    title: t("faq-item2-title"),
    body: t("faq-item2-body"),
  },
  {
    title: t("faq-item3-title"),
    body: t("faq-item3-body"),
  },
  {
    title: t("faq-item4-title"),
    body: t("faq-item4-body"),
  },
  {
    title: t("faq-item5-title"),
    body: t("faq-item5-body"),
  },
];

const FaqList = () => {
  const { locale } = useRouter();
  const { t } = useTranslation();

  return (
    <section id="faq" className={styles.wrapper} dir={locale === "he" ? "rtl" : "ltr"}>
      <div className={styles.content}>
        <FaqBackground className={styles.background} />
        <FaqMobileBackground className={styles.mobileBackground} />
        <h2 className={styles.heading}>F.A.Q</h2>
        <div className={styles.body}>
          {faqs(t).map((item, index) => (
            <AccordionItem key={index} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqList;
