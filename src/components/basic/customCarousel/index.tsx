import React, { ReactNode } from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import styles from "./style.module.scss";
import arrowLeft from "@/assets/img/png/arrowLeft.png";
import arrowRight from "@/assets/img/png/arrowRight.png";
import Image from "next/image";

var $ = require("jquery");
if (typeof window !== "undefined") {
  // @ts-ignore
  window.$ = window.jQuery = require("jquery");
}

const OwlCarousel = dynamic(() => import("react-owl-carousel-rtl"), {
  ssr: false,
});

type Props = {
  children: ReactNode;
  direction?: string;
  loop?: boolean;
  carouselId?: string;
};

const CustomCarousel: React.FC<Props> = ({ children, direction = "ltr", loop = false, carouselId = "carouselId" }) => {
  return (
    <div>
      <OwlCarousel
        items={2}
        autoWidth
        dotsClass="owl-dots"
        dots={false}
        margin={20}
        rtl={direction === "ltr" ? false : true}
        loop={false}
        autoplay={false}
        autoplayTimeout={3000}
        autoplayHoverPause={true}
        id={carouselId}
      >
        {children}
      </OwlCarousel>
      {carouselId === "reviewCarousel" && (
        <div className={styles.buttonSection}>
          <button className={styles.arrowButton} onClick={() => $(`#${carouselId}`).trigger("prev.owl.carousel")}>
            <Image src={arrowLeft} alt="arrow" />
          </button>
          <button className={styles.arrowButton} onClick={() => $(`#${carouselId}`).trigger("next.owl.carousel")}>
            <Image src={arrowRight} alt="arrow" />
          </button>
        </div>
      )}
    </div>
  );
};

export default CustomCarousel;
