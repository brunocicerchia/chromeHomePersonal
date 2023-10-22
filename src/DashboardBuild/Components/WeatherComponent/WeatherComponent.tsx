"use client";

import styles from "./styles.module.css";
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

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
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
      <div className={styles.moreInfo}>
        <Button variant="primary" onClick={handleShow}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
        </svg>
        </Button>
      </div>
      <div className="align-self-center">
        <h2 className="title">{temp.city}</h2>
        <div className="d-flex justify-content-center">
          <img src={temp.code} alt="weather" className="text-center img-fluid"/>
        </div>
        <h1 className="text">{Math.round(temp.temperature)}°</h1>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="title">{temp.city}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="text">Humedad: {temp.humidity}%</p>
          <p className="text">Nubes: {temp.clouds}%</p>
          <p className="text">Viento: {temp.wind} m/s</p>
        </Modal.Body>
      </Modal>
    </div>
  );
}
