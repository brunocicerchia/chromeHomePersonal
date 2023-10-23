import DolarBlueComponent from "../Components/DolarBlueComponent/DolarBlueComponent";
import styles from "./styles.module.css";

export default function LeftBoxComponent() {
  return (
    <div className="row mt-md-5 mt-2">
      <div className="col-md-4">
          <DolarBlueComponent></DolarBlueComponent>
      </div>
      <div className="col-md-4">
        <div className={styles.container}></div>
      </div>
      <div className="col-md-4">
        <div className={styles.container}></div>
      </div>
    </div>
  );
}
