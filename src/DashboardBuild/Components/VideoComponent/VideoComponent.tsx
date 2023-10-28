'use client'
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

export default function VideoComponent(props: any) {
  const [wallpaper, setWallaper] = useState("background1");

  //UseEffect props
  useEffect(() => {
    console.log(props.video)
    //Fetch the video
    fetch(props.video + ".webm")
      .then((res) => {
        if (res.status === 200) {
          setWallaper(props.video)
        } else {
          console.log("Video not found!"); 
        }
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  }, [props])

  return (
    <video
    src={wallpaper + ".webm"}
    autoPlay
    muted
    loop
    className={styles.video} />
  );
}