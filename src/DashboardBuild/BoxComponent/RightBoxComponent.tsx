import SearchComponent from "../Components/SearchComponent/SearchComponent";
import WeatherComponent from "../Components/WeatherComponent/WeatherComponent";
import styles from "./styles.module.css";

export default function RightBoxComponent(userConfig, location) {
  return (
    <div className="row mt-md-5 mt-2 m-2">
        <SearchComponent></SearchComponent>
        <WeatherComponent></WeatherComponent>
    </div>
  );
}
