import styles from "./styles.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import Image from "next/image";

export default function FastComponent() {
  return (
    <div className="row">
      <div className={`${styles.fast} ${"d-flex justify-content-center"}`}>
        <div className={`${styles.container} ${"col-md-4"}`}>
          <div
            className={`${styles.box} ${"grid d-flex justify-content-evenly"}`}
          >
            <div className={`${styles.icon} ${"text-center"}`}>
              <Image
                priority
                src="/notionIcon.svg"
                width={50}
                height={50}
                alt="Notion"
              />
            </div>

            <div className={styles.icon}>
              <Image
                priority
                src="/uadeIcon.svg"
                width={50}
                height={50}
                alt="WebCampus UADE"
              />
            </div>

            <div className={styles.icon}>
              <Image
                priority
                src="/youtubeIcon.svg"
                width={50}
                height={50}
                alt="Youtube"
              />
            </div>

            <div className={styles.icon}>
              <Image
                priority
                src="/musicIcon.svg"
                width={50}
                height={50}
                alt="Youtube Music"
              />
            </div>

            <div className={styles.icon}>
              <Image
                priority
                src="/twitterIcon.svg"
                width={50}
                height={50}
                alt="Twitter"
              />
            </div>

            <div className={styles.icon}>
              <Image
                priority
                src="/gmailIcon.svg"
                width={50}
                height={50}
                alt="Gmail"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
