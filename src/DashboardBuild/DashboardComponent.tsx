'use client'
import styles from "./styles.module.css";
import LeftComponent from "@/src/DashboardBuild/Containers/LeftComponent";
import RightComponent from "@/src/DashboardBuild/Containers/RightComponent";
import FastComponent from "@/src/DashboardBuild/FastComponent/FastComponent";
import { useState } from "react";

//Bootstrap Components
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import VideoComponent from "./Components/VideoComponent/VideoComponent";

export default function DashboardComponent() {

  const [wallpaper, setWallpaper] = useState("https://cdn.discordapp.com/attachments/1173593342857183242/1173593982207545416/Background1.webm");
  const [lgShow, setLgShow] = useState(false);

  function changeWallpaper(video: string) {
    setWallpaper(video)
  }

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
                <Col><p onClick={() => setWallpaper("https://cdn.discordapp.com/attachments/1173593342857183242/1173593982207545416/Background1.webm")}>1</p></Col>
                <Col><p onClick={() => setWallpaper("https://cdn.discordapp.com/attachments/1173593342857183242/1173593983914623046/Background2.webm")}>2</p></Col>
                <Col><p onClick={() => setWallpaper("https://cdn.discordapp.com/attachments/1173593342857183242/1173593984808005722/Background3.webm")}>3</p></Col>
                <Col><p onClick={() => setWallpaper("https://cdn.discordapp.com/attachments/1173593342857183242/1173593986049527818/Background4.webm")}>4</p></Col>
              </Row>
            </Container>
        </Modal.Body>
      </Modal>
    </div>
  );
}
