'use client'
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

export default function ClockComponent() {
    //create state for date
    const [fecha, setFecha] = useState({hora: "", minutos: "", segundos: "", fecha: ""});

    //UseEffect props
    useEffect(() => {
      const intervalId = setInterval(() => {
          const date = new Date();
          const fecha = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();  
          setFecha({hora: date.getHours().toString().padStart(2, '0'), minutos: date.getMinutes().toString().padStart(2, '0'), segundos: date.getSeconds().toString().padStart(2, '0'), fecha: fecha}); 
      }, 1000);

      return () => {
        clearInterval(intervalId);
      };
            
    }, [])

    return (
    <div className={styles.container}>
      <div className="align-self-center">
        <div>
            <h2 style={{fontSize: '4rem'}}>{fecha.hora + ":" + fecha.minutos}</h2>
            <h5>{fecha.fecha}</h5>
        </div>
      </div>
    </div>
    );
}