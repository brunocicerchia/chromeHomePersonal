import { useEffect, useState } from "react";
import styles from "./styles.module.css";

export default function VideoComponent(props: any) {
  const [wallpaper, setWallaper] = useState("background1");

  //UseEffect props
  useEffect(() => {
    console.log(props.video)
      var recursos = performance.getEntriesByName(props.video + ".webm");

      if (recursos.length > 0) {
        // Obtiene el primer recurso (puedes iterar sobre recursos si hay más de uno)
        var primerRecurso = recursos[0];
    
        // Verifica si el recurso está en caché
        if (primerRecurso.duration === 0) {
            console.log('El recurso está en caché.');
            // Puedes tomar acciones aquí, como evitar la descarga del archivo nuevamente.
        } else {
            console.log('El recurso no está en caché.');
            // Puedes decidir descargar el archivo nuevamente si no está en caché.
        }
    } else {
        console.log('No se encontraron recursos con esa URL.');
        // Puedes decidir descargar el archivo ya que no se encuentra en caché.
    }

    //Fetch the video
    fetch(props.video + ".webm")
      .then((res) => {
        if (res.status === 200) {
          setWallaper(props.video)
        } else {
          console.log("Video not found!"); 
        }
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  }, [props])

  return (
    <video
    src="https://cdn.discordapp.com/attachments/1067945589570031647/1168525359340339200/Background1.webm?ex=6552150b&is=653fa00b&hm=40e9c52a6c664876a363740820c94253d7d1e42d2d4b8ed8eebe34aef31ff0a8&"
    autoPlay
    muted
    loop
    className={styles.video} />
  );
}