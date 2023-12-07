'use client'
import styles from "./styles.module.css";
import LeftComponent from "./Containers/LeftComponent";
import RightComponent from "./Containers/RightComponent";
import FastComponent from "./FastComponent/FastComponent";
import { useState } from "react";

//Bootstrap Components
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import VideoComponent from "./Components/VideoComponent/VideoComponent";
import Image from 'react-bootstrap/Image';

export default function DashboardComponent() {

  const wallpaperList = [
    "https://cdn.discordapp.com/attachments/1173593342857183242/1173593982207545416/Background1.webm",
    "https://cdn.discordapp.com/attachments/1173593342857183242/1173593983914623046/Background2.webm",
    "https://cdn.discordapp.com/attachments/1173593342857183242/1173593984808005722/Background3.webm",
    "https://cdn.discordapp.com/attachments/1173593342857183242/1173593986049527818/Background4.webm"
  ]

  const [wallpaper, setWallpaper] = useState(wallpaperList[0]);
  const [lgShow, setLgShow] = useState(false);

  return (
    <div style={styles}>
      <div className={styles.modal}>
        <Button onClick={() => setLgShow(true)}>
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
        </svg>
        </Button>
      </div>
      <div className={styles.dashboardMain}>
        <div className={styles.father}>
          <VideoComponent video={wallpaper}></VideoComponent>
          <FastComponent></FastComponent>
          <div className={styles.content}>
            <div className="container-fluid text-center">
              <div className="row">
                <div className="col-md-9">
                  <LeftComponent></LeftComponent>
                </div>
                <div className="col-md-3">
                  <RightComponent></RightComponent>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Select Wallpaper
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Container>
              <Row className="text-center">
                <Col className={styles.gif} xs={6} md={4}>
                  <a href="#"><Image onClick={() => setWallpaper(wallpaperList[0])} src="https://cdn.discordapp.com/attachments/1173593342857183242/1181788832283238450/Background1.gif" thumbnail alt="Wallpaper 1"/></a>
                </Col>
                <Col className={styles.gif} xs={6} md={4}>
                  <a href="#"><Image onClick={() => setWallpaper(wallpaperList[1])} src="https://cdn.discordapp.com/attachments/1173593342857183242/1181788831821873272/Background2.gif" thumbnail alt="Wallpaper 2"/></a>
                </Col>
                <Col className={styles.gif} xs={6} md={4}>
                  <a href="#"><Image onClick={() => setWallpaper(wallpaperList[2])} src="https://cdn.discordapp.com/attachments/1173593342857183242/1181788831188537475/Background3.gif" thumbnail alt="Wallpaper 3"/></a>
                </Col>
                <Col className={styles.gif} xs={6} md={4}>
                  <a href="#"><Image onClick={() => setWallpaper(wallpaperList[3])} src="https://cdn.discordapp.com/attachments/1173593342857183242/1181788830718763069/background4.gif" thumbnail alt="Wallpaper 4"/></a>
                </Col>
              </Row>
            </Container>
        </Modal.Body>
      </Modal>
    </div>
  );
}
