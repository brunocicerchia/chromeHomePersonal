'use client'
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

export default function VideoComponent(props: any) {
  const [wallpaper, setWallpaper] = useState("/wallpapers/Background1.webm");

  //UseEffect props
  useEffect(() => {
    //Fetch the video
    setWallpaper(props.video)
  }, [props])

  return (
    <video
    src={wallpaper}
    autoPlay
    muted
    loop
    className={styles.video} />
  );
}