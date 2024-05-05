import React from "react";
import Image, { StaticImageData } from "next/image";

import styles from "./style.module.scss";

type Props = {
  data: {
    name: string;
    image: StaticImageData;
    country: string;
    date: string;
    description: string;
  };
  direction: string;
};

const ReviewCard: React.FC<Props> = ({ data, direction }) => {
  return (
    <div className={styles.wrapperBorder}>
      <div className={styles.wrapper} dir={direction}>
        <div className={styles.header}>
          <Image src={data.image} className={styles.image} alt="user image" />
          <div className="flex flex-col">
            <p className={styles.name}>{data.name}</p>
            <p className={styles.country}>{data.country}</p>
          </div>
        </div>
        <div className={styles.context}>
          <div className={styles.date}>{data.date}</div>
          <div className={styles.description}>{data.description}</div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
