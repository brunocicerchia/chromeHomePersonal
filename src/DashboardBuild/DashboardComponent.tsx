import styles from "./styles.module.css";
import LeftComponent from "@/src/DashboardBuild/Containers/LeftComponent";
import RightComponent from "@/src/DashboardBuild/Containers/RightComponent";
import FastComponent from "@/src/DashboardBuild/FastComponent/FastComponent";

export default function DashboardComponent() {
  return (
    <div style={styles}>
      <div className={styles.dashboardMain}>
        <div className={styles.father}>
          <video
            src="https://cdn.discordapp.com/attachments/1067945589570031647/1168525359340339200/Background1.webm"
            autoPlay
            muted
            loop
            className={styles.video}
          ></video>
          <FastComponent></FastComponent>
          <div className={styles.content}>
            <div className="container-fluid text-center">
              <div className="row">
                <div className="col-md-9">
                  <LeftComponent></LeftComponent>
                </div>
                <div className="col-md-3">
                  <RightComponent></RightComponent>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
