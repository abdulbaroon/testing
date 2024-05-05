"use client";
import React from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

import Logo from "@/assets/img/svg/logo.svg";
import Slogan from "@/assets/img/svg/slogan.svg";
import FacebookSVG from "@/assets/img/svg/facebook.svg";
import InstagramSVG from "@/assets/img/svg/instagram.svg";
import YoutubeSVG from "@/assets/img/svg/youtube.svg";
import TextInput from "@/components/basic/input";
import { NAV_ITEMS, EXTERNAL_LINKS } from "@/constant";

import styles from "./style.module.scss";

const Footer = () => {
  const { t } = useTranslation();
  const { locale } = useRouter();

  return (
    <footer dir={locale === "he" ? "rtl" : "ltr"}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <ScrollLink to="hero" smooth={true} duration={500} className={styles.logo}>
              <Logo className={styles.logoImage} />
            </ScrollLink>
            <div className={styles.slogan}>
              <Slogan className={styles.logoImage} />
            </div>
          </div>
          <div className={styles.navs}>
            <div className={styles.navGroup}>
              {NAV_ITEMS.slice(0, 4)?.map((item, index) => (
                <div key={index}>
                  <ScrollLink to={item?.link ?? ""} smooth={true} duration={500} offset={item?.offset}>
                    {t(item?.key ?? "")}{" "}
                  </ScrollLink>
                </div>
              ))}
            </div>
            <div className={styles.navGroup}>
              {NAV_ITEMS.slice(-2)?.map((item, index) => (
                <div key={index}>
                  <ScrollLink to={item?.link ?? ""} smooth={true} duration={500} offset={item?.offset}>
                    {t(item?.key ?? "")}{" "}
                  </ScrollLink>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.contact}>
            <h2 className={styles.touchTitle}>{t("footer-get-in-touch")}</h2>
            <TextInput
              type="email"
              className={styles.email}
              hasAction={true}
              placeHolder={t("footer-your-email")}
              dir={locale === "he" ? "rtl" : "ltr"}
            />
            <h2 className={styles.mediaTitle}>{t("footer-our-media")}</h2>
            <div className={styles.mediaGroup}>
              {[
                { icon: FacebookSVG, link: EXTERNAL_LINKS.facebook },
                { icon: InstagramSVG, link: EXTERNAL_LINKS.instagram },
                { icon: YoutubeSVG, link: EXTERNAL_LINKS.youtube },
              ].map((item, index) => (
                <div key={index} className={styles.mediaItem}>
                  <Link href={item.link}>
                    <item.icon className={styles.svg} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.content}>
          <div className={styles.copy}>
            <p>© 2022 Safespace.</p>
            <div className={styles.term}>
              <p>
                <Link href={EXTERNAL_LINKS.terms}>{t("footer-term")}</Link>
              </p>
              <p>
                <Link href={EXTERNAL_LINKS.policy}>{t("footer-privacy")}</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
