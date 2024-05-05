import React from "react";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { useTranslation } from "next-i18next";

import HelpAreaCard from "@/components/module/helpAreaCard";
import ProtectSVG from "@/assets/img/svg/protect.svg";
import CopyRightSVG from "@/assets/img/svg/copyRight.svg";
import TrafficSVG from "@/assets/img/svg/traffic.svg";
import PresenseSVG from "@/assets/img/svg/precence.svg";

import styles from "./style.module.scss";

const areaData = [
  {
    title: "help-brand-security",
    svg: ProtectSVG,
    hoverText: "help-brand-security-hover-text",
  },
  {
    title: "help-copyright-protection",
    svg: CopyRightSVG,
    hoverText: "help-copyright-protection-hover-text",
  },
  {
    title: "help-traffic-and-sales",
    svg: TrafficSVG,
    hoverText: "help-btraffic-and-sales-hover-text",
  },
  {
    title: "help-online-presence",
    svg: PresenseSVG,
    hoverText: "help-online-presence-hover-text",
  },
];

const customAnimation = keyframes`
    from {
      opacity: 0;
      transform: translate3d(0px, 100px, 0) scale(0.9);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0) scale(1);
    }
  `;

const HelpAreaSection = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.wrapper}>
      {areaData.map((item, index) => (
        <HelpAreaCard
          key={index}
          index={index}
          title={t(item.title)}
          SvgImage={item.svg}
          hoverText={t(item.hoverText)}
        />
      ))}
      <div className={styles.button} role="button">
        {t("help-we-help-with")}
      </div>
    </section>
  );
};

const HelpArea = () => {
  return (
    <section id="about-us">
      <Reveal triggerOnce keyframes={customAnimation} className="hidden tablet:block">
        <HelpAreaSection />
      </Reveal>
      <div className="block tablet:hidden">
        <HelpAreaSection />
      </div>
    </section>
  );
};

export default HelpArea;
