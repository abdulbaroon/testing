import React from "react";
import Image, { StaticImageData } from "next/image";
import classNames from "classnames";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

import styles from "./style.module.scss";
import CheckImage from "@/assets/img/svg/protectCheck.svg";

type Props = {
  data: {
    title: string;
    description: string[];
    mainImage: StaticImageData;
    background: any;
    mobileBg: any;
    order: string;
  };
};
const ProtectCard: React.FC<Props> = ({ data }) => {
  const { locale } = useRouter();
  const { t } = useTranslation("");

  return (
    <div className={styles.context}>
      <data.background className={classNames(styles.background, styles.desktop, styles[data.order])} />
      <div className={classNames(styles.imageWrapper, styles[data.order])}>
        <Image src={data.mainImage} alt="content" className={classNames(styles.image, styles[data.order])} />
        <data.mobileBg className={classNames(styles.background, styles.mobile, styles[data.order])} />
      </div>
      <div className={classNames(styles.textWrapper, styles[data.order])} dir={locale === "he" ? "rtl" : "ltr"}>
        <p className={styles.title}>{t(data.title)}</p>
        <div className={styles.item}>
          {data.description.map((item, index) => (
            <div className={styles.row} key={index}>
              <CheckImage className={styles.checkImage} />
              <p className={styles.description}>{t(item)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProtectCard;
