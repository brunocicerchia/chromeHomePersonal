import styles from "./styles.module.css";

export default function VideoComponent(props: any) {
  return (
    <video
    src={props.video + ".webm"}
    autoPlay
    muted
    loop
    className={styles.video} />
  );
}