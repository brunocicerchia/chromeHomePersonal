import CurrencyComponent from "DashboardBuild/Components/CurrencyComponent/CurrencyComponent";
import ClockComponent from "DashboardBuild/Components/ClockComponent/ClockComponent";
import styles from "./styles.module.css";

export default function LeftBoxComponent(userConfig, location) {
  return (
    <div className="row mt-md-5 mt-2 m-2">
      <div className="col-md-4">
          <ClockComponent></ClockComponent>
          <CurrencyComponent currency={userConfig.userConfig}></CurrencyComponent>          
      </div>
    </div>
  );
}
