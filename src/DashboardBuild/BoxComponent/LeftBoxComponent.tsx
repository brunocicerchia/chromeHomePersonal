import CurrencyComponent from "DashboardBuild/Components/CurrencyComponent/CurrencyComponent";
import styles from "./styles.module.css";

export default function LeftBoxComponent(userConfig) {
  return (
    <div className="row mt-md-5 mt-2">
      <div className="col-md-4">
          <CurrencyComponent currency={userConfig.userConfig}></CurrencyComponent>
      </div>
    </div>
  );
}
