"use client";

import styles from "./styles.module.css";
import { useState, useEffect } from "react";

//React component
export default function WeatherComponent() {
  //create state for location
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });

  //CREATE CONST FOR API KEY NAMED WEATHER_API_KEY
  const key =
    "https://api.openweathermap.org/data/2.5/weather?lat=" +
    location.latitude +
    "&lon=" +
    location.longitude +
    "&exclude=hourly,daily&unit=metric&appid=a33d4d5bacd512f38ab0d33304c250a5";

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
    console.log(key);
    const res = await fetch(`${key}`);
    const data = await res.json();
    console.log(data);
  };

  //create geolocation useEffect
  useEffect(() => {
    if (location.latitude == 0 && location.longitude == 0) {
      geoLocation();
    }
    console.log(location.longitude, location.latitude);
    fetchWeather();
  }, [location]);

  return <h2>Weather Component</h2>;
}
