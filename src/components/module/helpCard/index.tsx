import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import classNames from "classnames";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

import styles from "./style.module.scss";
import Arrow from "@/assets/img/svg/arrow.svg";

type Props = {
  data: {
    title: string;
    link: string;
    mainImage: StaticImageData;
    background: StaticImageData;
  };
  index: number;
};

const HelpCard: React.FC<Props> = ({ data, index }) => {
  const { locale } = useRouter();
  const { t } = useTranslation("");
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <div className={styles.header} dir={locale === "he" ? "rtl" : "ltr"}>
          <p className={styles.title}>{t(data.title)}</p>
          <Link href={data.link}>
            <Arrow className={styles.link} />
          </Link>
        </div>
        <Image className={styles.bg} src={data.background} alt="background" />
        <Image
          src={data.mainImage}
          alt="help image"
          className={classNames(index === 2 ? styles.thirdContentImage : styles.contentImage)}
        />
      </div>
    </div>
  );
};

export default HelpCard;
