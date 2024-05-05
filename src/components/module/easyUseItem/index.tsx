import React from "react";
import Image from "next/image";
import classNames from "classnames";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

import styles from "./style.module.scss";

import PurpleCircle from "@/assets/img/svg/purpleCircle.svg";

type UseItemProps = {
  data: {
    number: string;
    title: string;
    description: string;
    leftPosition: boolean;
    topPosition: string;
    image: any;
  };
};

const EasyUseItem: React.FC<UseItemProps> = ({ data }) => {
  const { locale } = useRouter();
  const { t } = useTranslation("");

  return (
    <div className={styles.wrapper}>
      <div
        className={classNames(
          styles.leftSection,
          {
            [styles.rightMode]: locale === "he",
          },
          {
            [styles.order]: !data.leftPosition,
            [styles.orderNone]: data.leftPosition,
          },
        )}
        dir={locale === "he" ? "rtl" : "ltr"}
      >
        <p className={styles.number}>{data.number}</p>
        <p className={styles.title}>{t(data.title)}</p>
        <p className={styles.description}>{t(data.description)}</p>
      </div>
      <div
        className={classNames(
          styles.rightSection,
          {
            [styles.rightMode]: locale === "he",
          },
          {
            [styles.order]: data.leftPosition,
            [styles.orderNone]: !data.leftPosition,
          },
        )}
      >
        <Image src={data.image} alt="image" />
      </div>
      <div
        className={classNames(
          { [styles.rightCircleButton]: locale === "he", [styles.circleButton]: locale !== "he" },
          styles[data.topPosition],
        )}
      >
        <PurpleCircle />
      </div>
    </div>
  );
};

export default EasyUseItem;
