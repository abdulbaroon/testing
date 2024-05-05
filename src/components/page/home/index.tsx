import React from "react";
import Image from "next/image";
import classNames from "classnames";

import Benifits from "@/components/ui/home/benifits";
import FaqList from "@/components/ui/home/faq";
import HelpArea from "@/components/ui/home/help";
import Hero from "@/components/ui/home/hero";
import Plan from "@/components/ui/home/plan";
import Contact from "@/components/ui/home/contact";
import SupportBg from "@/assets/img/png/support.png";
import IntroSection from "@/components/ui/home/intro";
import VideoSection from "../../ui/home/video";
import UserRecommend from "../../ui/home/influencer";
import EasyUse from "../../ui/home/easyUse";
import HelpUs from "../../ui/home/helpUs";
import AutoScan from "../../ui/home/autoScan";
import StartFree from "../../ui/home/start";
import SecondStartFree from "../../ui/home/secondStartFree";

import styles from "./style.module.scss";
import Footer from "@/layout/footer";
import Navbar from "@/layout/navbar/index";
import Protect from "../../ui/home/protect";
import Review from "../../ui/home/review";

const HomePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <HelpArea /> */}
      {/* <Benifits /> */}
      <VideoSection />
      <UserRecommend />
      <EasyUse />
      <HelpUs />
      <IntroSection />
      <AutoScan />
      <Protect />
      <StartFree />
      <Plan />
      <FaqList />
      <Review />
      <SecondStartFree />

      {/* <div className={classNames(styles.blackBg, styles.roundedTop)}>
        <Image src={SupportBg} alt="support-bg" className={styles.starBg} />
        <Contact />
      </div> */}
      <Footer />
    </>
  );
};

export default HomePage;
