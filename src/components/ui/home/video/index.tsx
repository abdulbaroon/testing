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
            <source
              src="https://s3-figma-videos-production-sig.figma.com/video/1255181474829062041/TEAM/dfe0/d29b/-63e4-4f75-a7b4-f777aeb37fc9?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Kpz2Q9hwe-aeh-UnAatFG5CED1rwjI3KVypI0rBSwlNgiZaHYwpJ86gVMhBTTKbjE8q47hGmtplQNCB~rlvpud1YnY8ToV4N2Ma3ZjqMzZ0rmfOHv6lkA3Hem84U-JG7BQSt7ILrgwah-7gpwzy8VdyD9zGA1qUBTaVqU6iT08VFzr80K~hq9xSG2Njn9SuPYy62j7IJjNWDbX0xMY9tRh7Wlch99v0h1CiysDxTNmVubyPpgJTcJ8ZxssGZ6uhSYWQkv3LgescsGah0NVbs5RcjMV7K1bfAioD0crn6b8VoKbnT6Hktwx0NvrsJEyT~tPsjSIngoSCULtO4t2SBZQ__"
              type="video/mp4"
            />
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
