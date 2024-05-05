import React, { useState } from "react";
import Image from "next/image";
import classNames from "classnames";
import { useRouter } from "next/router";

import UKIcon from "@/assets/img/png/uk.png";
import IsraelIcon from "@/assets/img/png/israel.png";

import styles from "./styles.module.scss";
import Link from "next/link";

const LanguageSwitchier = () => {
  const { locale, asPath } = useRouter();
  const [active, setActive] = useState(false);

  return (
    <>
      <div className={styles.desktop}>
        <div className={styles.selected}>
          <button className={styles.langButton} onClick={() => setActive((prev) => !prev)}>
            {locale === "he" ? (
              <Image src={IsraelIcon} alt="he" className={styles.flagIcon} />
            ) : (
              <Image src={UKIcon} alt="en" className={styles.flagIcon} />
            )}
          </button>
        </div>
        <div className={classNames(styles.popOver, { [styles.active]: active })}>
          <Link href="/" as={asPath} locale={"en"} onClick={() => setActive(false)}>
            <button className={styles.langButton}>
              <Image src={UKIcon} alt="en" className={styles.flagIcon} />
            </button>
          </Link>
          <Link href="/" as={asPath} locale={"he"} onClick={() => setActive(false)}>
            <button className={styles.langButton}>
              <Image src={IsraelIcon} alt="he" className={styles.flagIcon} />
            </button>
          </Link>
        </div>
      </div>

      <div className={styles.mobile}>
        <Link href="/" as={asPath} locale={"en"}>
          <button className={styles.langButton}>
            <Image src={UKIcon} alt="en" className={styles.flagIcon} />
          </button>
        </Link>
        <Link href="/" as={asPath} locale={"he"}>
          <button className={styles.langButton}>
            <Image src={IsraelIcon} alt="he" className={styles.flagIcon} />
          </button>
        </Link>
      </div>
    </>
  );
};

export default LanguageSwitchier;
