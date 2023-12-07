'use client'
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

export default function VideoComponent(props: any) {
  const [wallpaper, setWallpaper] = useState("https://cdn.discordapp.com/attachments/1173593342857183242/1173593982207545416/Background1.webm");

  //UseEffect props
  useEffect(() => {
    console.log(props.video)
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