import React, { useRef, useState } from "react";
import { useTranslation } from "next-i18next";

import styles from "./style.module.scss";
import VideoPlay from "@/assets/img/svg/play.svg";
import VideoPause from "@/assets/img/svg/pause.svg";
import VideoBg from "@/assets/img/svg/videoBackground.svg";

const VideoSection: React.FC = () => {
  const videoRef = useRef<any>();
  const [videoPlayStatus, setVideoPlayStatus] = useState(false);
  const [videoDisplayStatus, setVideoDisplayStatus] = useState(false);
  const { t } = useTranslation("");

  const handlePlay = () => {
    if (videoPlayStatus) {
      setVideoPlayStatus(false);
      videoRef.current.pause();
    } else {
      setVideoPlayStatus(true);
      videoRef.current.play();
    }
  };

  const handleVideoFocus = () => {
    setVideoDisplayStatus(true);
  };

  const handleVideoLeave = () => {
    setVideoDisplayStatus(false);
  };

  const handleVideoEnd = () => {
    setVideoPlayStatus(false);
  };

  return (
    <section className={styles.wrapper}>
      <p className={styles.videoTitle}>{t("how-to-work")}</p>
      <VideoBg className={styles.videoBg} />
      <div className={styles.videoSection}>
        <div className={styles.videoMain} onMouseLeave={handleVideoLeave} onMouseOver={handleVideoFocus}>
          <video
            id="video-tag"
            muted
            playsInline
            preload="auto"
            width={"100%"}
            className={styles.video}
            ref={videoRef}
            onEnded={handleVideoEnd}
          >
            <source src="videos/HowItWork.mp4" type="video/mp4" />
          </video>
          {videoDisplayStatus && (
            <button onClick={handlePlay} className={styles.playButton}>
              {!videoPlayStatus ? <VideoPlay /> : <VideoPause />}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
