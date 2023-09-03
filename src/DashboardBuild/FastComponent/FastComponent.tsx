import styles from "./styles.module.css";
import Link from "next/link";
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
              <Link href="https://www.notion.so/">
                <Image
                  priority
                  src="/notionIcon.svg"
                  width={50}
                  height={50}
                  alt="Notion"
                />
              </Link>
            </div>

            <div className={styles.icon}>
              <Link href="https://www.webcampus.uade.edu.ar/">
                <Image
                  priority
                  src="/uadeIcon.svg"
                  width={50}
                  height={50}
                  alt="WebCampus UADE"
                />
              </Link>
            </div>

            <div className={styles.icon}>
              <Link href="https://www.youtube.com/">
                <Image
                  priority
                  src="/youtubeIcon.svg"
                  width={50}
                  height={50}
                  alt="Youtube"
                />
              </Link>
            </div>

            <div className={styles.icon}>
              <Link href="https://music.youtube.com/">
                <Image
                  priority
                  src="/musicIcon.svg"
                  width={50}
                  height={50}
                  alt="Youtube Music"
                />
              </Link>
            </div>

            <div className={styles.icon}>
              <Link href="https://twitter.com/home">
                <Image
                  priority
                  src="/twitterIcon.svg"
                  width={50}
                  height={50}
                  alt="Twitter"
                />
              </Link>
            </div>

            <div className={styles.icon}>
              <Link href="https://mail.google.com/">
                <Image
                  priority
                  src="/gmailIcon.svg"
                  width={50}
                  height={50}
                  alt="Gmail"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
