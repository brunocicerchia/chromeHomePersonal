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
            src="/background.mp4"
            autoPlay
            muted
            loop
            className={styles.video}
          ></video>
          <FastComponent></FastComponent>
          <div className={styles.content}>
            <div className="container-fluid text-center">
              <div className="row">
                <div className="col-md-8">
                  <LeftComponent></LeftComponent>
                </div>
                <div className="col-md-4">
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
