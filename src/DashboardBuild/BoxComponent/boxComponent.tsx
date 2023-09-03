import DolarBlueComponent from "../Components/DolarBlueComponent";
import styles from "./styles.module.css";

export default async function BoxComponent() {
  return (
    <div className="row mt-md-5 mt-2">
      <div className="col-md-4">
        <div className={styles.container}>
          <DolarBlueComponent></DolarBlueComponent>
        </div>
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