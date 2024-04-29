import CurrencyComponent from "DashboardBuild/Components/CurrencyComponent/CurrencyComponent";
import ClockComponent from "DashboardBuild/Components/ClockComponent/ClockComponent";
import styles from "./styles.module.css";

export default function LeftBoxComponent(userConfig) {
  const userConfigCloud = userConfig.userConfig;
  const visibilityConfig = userConfig.components.currencyComponent;
  console.log()
  return (
    <div className="row mt-md-5 mt-2 m-2">
      <div className="col-md-4">
          <ClockComponent></ClockComponent>
          <CurrencyComponent propss={visibilityConfig} currency={userConfigCloud}></CurrencyComponent>
      </div>
    </div>
  );
}
