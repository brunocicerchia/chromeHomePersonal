"use client";

import styles from "./styles.module.css";
import { useState, useEffect } from "react";

//React component
export default function WeatherComponent() {
  //create state for location
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
  const [temp, setTemp] = useState({
    temperature: 0,
    humidity: 0,
    wind: 0,
    code: "",
    city: "",
    clouds: 0,
    rain: 0,
  });

  //CREATE CONST FOR API KEY NAMED WEATHER_API_KEY
  const key =
    "https://api.openweathermap.org/data/2.5/weather?lat=" +
    location.latitude +
    "&lon=" +
    location.longitude +
    "&exclude=hourly,daily&appid=a33d4d5bacd512f38ab0d33304c250a5&units=metric";

  //create geolocation function
  const geoLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const { latitude, longitude } = coords;
        setLocation({ latitude, longitude });
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  //create fetch function for nextjs13
  const fetchWeather = async () => {
    const res = await fetch(`${key}`);
    const data = await res.json();
    console.log(data);
    if (data.main.name !== "Globe") {
      setTemp({
        temperature: data.main.temp,
        humidity: data.main.humidity,
        wind: data.wind.speed,
        city: data.name,
        clouds: data.clouds.all,
        rain: data.rain,
        code: "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png" //ESTO ES UN ARRAY. TENDRIA QUE VER COMO HACER PARA SETEAR
      });
    }
  };

  //create geolocation useEffect
  useEffect(() => {
    if (location.latitude == 0 && location.longitude == 0) {
      geoLocation();
    }
    if (location.latitude != 0 && location.longitude != 0) {
      fetchWeather();
    }
  }, [location]);

  console.log(temp.code)

  return (
    <div className={styles.container}>
      <div className="align-self-center">
        <h2>{temp.city}</h2>
        <img src={temp.code} alt="weather" className="text-center img-fluid"/>
        <h1>{temp.temperature}°</h1>
      </div>    
    </div>
  );
}

//<p>Humedad: {temp.humidity}%</p>
//<p>Nubes: {temp.clouds}%</p>
//<p>Lluvia: {temp.rain}%</p>
//<p>Viento: {temp.wind} m/s</p>