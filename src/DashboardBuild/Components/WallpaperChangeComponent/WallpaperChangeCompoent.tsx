'use client'
import styles from "./styles.module.css";
import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

export default function WallpaperChangeComponent({enviarDatos}) {

    const [datos, setDatos] = useState(null);

  //Login check
  useEffect(() => {
    enviarDatos(datos);
  },[datos]);


    return (
    <div>
            <Container>
              <Row className="text-center">
                <Col className={styles.gif} xs={6} md={4}>
                  <a href="#"><Image onClick={() => setDatos(0)} src="https://firebasestorage.googleapis.com/v0/b/chromehome-eab2d.appspot.com/o/Background1.png?alt=media&token=787093d3-472b-423b-8f16-9db18a9d461a" thumbnail alt="Wallpaper 1" loading="lazy"/></a>
                </Col>
                <Col className={styles.gif} xs={6} md={4}>
                  <a href="#"><Image onClick={() => setDatos(1)} src="https://firebasestorage.googleapis.com/v0/b/chromehome-eab2d.appspot.com/o/Background2.png?alt=media&token=a598fa9e-ee5e-4a42-96a9-94dd15654d80" thumbnail alt="Wallpaper 2" loading="lazy"/></a>
                </Col>
                <Col className={styles.gif} xs={6} md={4}>
                  <a href="#"><Image onClick={() => setDatos(2)} src="https://firebasestorage.googleapis.com/v0/b/chromehome-eab2d.appspot.com/o/Background3.png?alt=media&token=511d8c64-1a80-4278-8146-5f267c67544c" thumbnail alt="Wallpaper 3" loading="lazy"/></a>
                </Col>
                <Col className={styles.gif} xs={6} md={4}>
                  <a href="#"><Image onClick={() => setDatos(3)} src="https://firebasestorage.googleapis.com/v0/b/chromehome-eab2d.appspot.com/o/Background4.png?alt=media&token=1181476e-3b98-496c-b127-3e70483ac45a" thumbnail alt="Wallpaper 4" loading="lazy"/></a>
                </Col>
                <Col className={styles.gif} xs={6} md={4}>
                  <a href="#"><Image onClick={() => setDatos(4)} src="https://firebasestorage.googleapis.com/v0/b/chromehome-eab2d.appspot.com/o/Background5.png?alt=media&token=23bac672-7d79-48ee-8deb-b30eed62adee" thumbnail alt="Wallpaper 5" loading="lazy"/></a>
                </Col>
                <Col className={styles.gif} xs={6} md={4}>
                  <a href="#"><Image onClick={() => setDatos(5)} src="https://firebasestorage.googleapis.com/v0/b/chromehome-eab2d.appspot.com/o/Background6.png?alt=media&token=1eda2b72-405b-4fa6-b04c-db52d714c050" thumbnail alt="Wallpaper 4" loading="lazy"/></a>
                </Col>
                <Col className={styles.gif} xs={6} md={4}>
                  <a href="#"><Image onClick={() => setDatos(6)} src="https://firebasestorage.googleapis.com/v0/b/chromehome-eab2d.appspot.com/o/Background7.png?alt=media&token=c891e4db-1e01-44c3-976c-74350a73fc51" thumbnail alt="Wallpaper 4" loading="lazy"/></a>
                </Col>
                <Col className={styles.gif} xs={6} md={4}>
                  <a href="#"><Image onClick={() => setDatos(7)} src="https://firebasestorage.googleapis.com/v0/b/chromehome-eab2d.appspot.com/o/Background8.png?alt=media&token=5cc28226-1ef3-422f-97d0-c333470069bc" thumbnail alt="Wallpaper 4" loading="lazy"/></a>
                </Col>
                <Col className={styles.gif} xs={6} md={4}>
                  <a href="#"><Image onClick={() => setDatos(8)} src="https://firebasestorage.googleapis.com/v0/b/chromehome-eab2d.appspot.com/o/Background9.png?alt=media&token=3b932de7-57d8-4561-bc1c-f3acfa55cd0f" thumbnail alt="Wallpaper 4" loading="lazy"/></a>
                </Col>
                <Col className={styles.gif} xs={6} md={4}>
                  <a href="#"><Image onClick={() => setDatos(9)} src="https://firebasestorage.googleapis.com/v0/b/chromehome-eab2d.appspot.com/o/Background10.png?alt=media&token=477c7571-ac3c-4f66-b0f4-7997898618b7" thumbnail alt="Wallpaper 4" loading="lazy"/></a>
                </Col>
                <Col className={styles.gif} xs={6} md={4}>
                  <a href="#"><Image onClick={() => setDatos(10)} src="https://firebasestorage.googleapis.com/v0/b/chromehome-eab2d.appspot.com/o/Background11.png?alt=media&token=7985c689-f18d-4c7c-af84-5a9f8784238f" thumbnail alt="Wallpaper 4" loading="lazy"/></a>
                </Col>
              </Row>
            </Container>
    </div>
  );
}
