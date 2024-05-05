import React, { useState } from "react";
import classNames from "classnames";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import Logo from "@/assets/img/svg/logo.svg";
import { EXTERNAL_LINKS, NAV_ITEMS } from "@/constant";

import styles from "./style.module.scss";
import LanguageSwitchier from "@/components/module/languageSwichier";

const Navbar = () => {
  const { t } = useTranslation("");
  const { locale } = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className={styles.header} dir={locale === "he" ? "rtl" : "ltr"}>
      <nav className={classNames(styles.wrapper, { [styles.active]: isOpen })}>
        <ScrollLink to="hero" smooth={true} duration={500} className={styles.logo}>
          <Logo className={classNames(styles.logoImg, { [styles.active]: isOpen })} />
        </ScrollLink>
        <div className={styles.navigation}>
          <div className={styles.landingNavs}>
            {NAV_ITEMS?.map((item, index) => (
              <ScrollLink
                key={index}
                className={styles.link}
                to={item?.link ?? ""}
                smooth={true}
                duration={500}
                offset={item?.offset}
              >
                {t(`${item?.key}`)}
              </ScrollLink>
            ))}
          </div>
          <div className={styles.authNavs}>
            <LanguageSwitchier />
            <Link href={`${EXTERNAL_LINKS.login}/${locale}/auth/login`}>
              <div className={styles.login}>{t("login")}</div>
            </Link>
            <Link href={`${EXTERNAL_LINKS.login}/${locale}/auth/register`}>
              <div className={styles.getProtected}>{t("get-protect")}</div>
            </Link>
          </div>
        </div>
        <div className={styles.mobileNavigation}>
          <div role="button" className={styles.hambugurButton} onClick={() => setIsOpen((prev) => !prev)}>
            {!isOpen ? (
              <svg viewBox="0 0 28 16" fill="none">
                <path d="M2 2H26" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                <path d="M2 14H26" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M1.51465 1.51471L18.4852 18.4853" stroke="#5B27F7" strokeWidth="3" strokeLinecap="round" />
                <path d="M1.51465 18.4853L18.4852 1.51473" stroke="#5B27F7" strokeWidth="3" strokeLinecap="round" />
              </svg>
            )}
          </div>
        </div>
      </nav>
      <div className={classNames(styles.popOver, { [styles.show]: isOpen })}>
        <div className={styles.mobile}>
          <div className={styles.navLinks}>
            {NAV_ITEMS?.map((item, index) => (
              <div role="button" key={index} className={styles.navItem}>
                <ScrollLink
                  to={item?.link ?? ""}
                  smooth={true}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  offset={item?.offset}
                >
                  {t(`${item?.key}`)}
                </ScrollLink>
              </div>
            ))}
          </div>
          <div className={styles.langSwitch}>
            <LanguageSwitchier />
          </div>
          <div className={styles.authNavs}>
            <div className={styles.login}>
              <Link href={EXTERNAL_LINKS.login}>{t("login")}</Link>
            </div>

            <div className={styles.getProtected}>
              <Link href={EXTERNAL_LINKS.register}>{t("get-protect")}</Link>
            </div>
          </div>
        </div>
        <div className={styles.tablet}>
          <div className={styles.navLinks}>
            {NAV_ITEMS.slice(0, 4)?.map((item, index) => (
              <div key={index} className={styles.navItem}>
                <ScrollLink
                  to={item?.link ?? ""}
                  smooth={true}
                  duration={500}
                  offset={item?.offset}
                  onClick={() => setIsOpen(false)}
                >
                  {t(`${item?.key}`)}
                </ScrollLink>
              </div>
            ))}
          </div>
          <div className={styles.navLinks}>
            {NAV_ITEMS.slice(-2)?.map((item, index) => (
              <div key={index} className={styles.navItem}>
                <ScrollLink
                  to={item?.link ?? ""}
                  smooth={true}
                  duration={500}
                  offset={item?.offset}
                  onClick={() => setIsOpen(false)}
                >
                  {t(`${item?.key}`)}
                </ScrollLink>
              </div>
            ))}
          </div>
          <div className={styles.authNavs}>
            <div className={styles.login}>
              <Link href={EXTERNAL_LINKS.login}>{t("login")}</Link>
            </div>

            <div className={styles.getProtected}>
              <Link href={EXTERNAL_LINKS.register}>{t("get-protect")}</Link>
            </div>
          </div>
          <div className={styles.langSwitch}>
            <LanguageSwitchier />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
