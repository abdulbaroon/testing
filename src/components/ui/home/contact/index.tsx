import React, { useReducer } from "react";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

import TextInput from "@/components/basic/input";
import Button from "@/components/basic/button";
import TextArea from "@/components/basic/textarea";
import SunriseBg from "@/assets/img/svg/sunrise.svg";

import styles from "./style.module.scss";

const Contact = () => {
  const { t } = useTranslation();
  const { locale } = useRouter();

  return (
    <section id="support" className={styles.wrapper} dir={locale === "he" ? "rtl" : "ltr"}>
      <div className={styles.container}>
        <h2 className={styles.heading}>{t("support-title")}</h2>
        <form className={styles.form}>
          <Fade direction="up" triggerOnce cascade duration={600}>
            <TextInput placeHolder={t("support-name")} className={styles.input} />
            <TextInput placeHolder={t("support-email")} className={styles.input} />
            <TextArea name="contents" placeholder={t("support-text")} rows={5} className={styles.input} />
            <div className={styles.buttonWrapper}>
              <Button>{t("support-submit")}</Button>
            </div>
          </Fade>
        </form>
      </div>
      <SunriseBg className={styles.bgPattern} />
    </section>
  );
};

export default Contact;
