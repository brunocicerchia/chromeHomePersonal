'use client'
import styles from "./styles.module.css";
//React Components
import LeftComponent from "./Containers/LeftComponent";
import RightComponent from "./Containers/RightComponent";
import FastComponent from "./FastComponent/FastComponent";
import { useState, useEffect } from "react";
//login and register imports
import { auth } from "./firebase";
import { onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
//Database imports
import { db } from "./firebase";
import { collection, addDoc, getDocs, query, where, setDoc, doc, documentId } from "firebase/firestore";

//Bootstrap Components
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import VideoComponent from "./Components/VideoComponent/VideoComponent";
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';

export default function DashboardComponent() {
  
  //Login credential state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //Wallpaper change state
  const wallpaperList = [
    "wallpapers/Background1.webm",
    "wallpapers/Background2.webm",
    "wallpapers/Background3.webm",
    "wallpapers/Background4.webm"
  ]

  const [wallpaper, setWallpaper] = useState(wallpaperList[0]);
  const [config, setConfig] = useState([]);
  const [lgShow, setLgShow] = useState(false);

  //Login Modal state
  const [loginShow, setLoginShow] = useState(false);

  const handleClose = () => setLoginShow(false);
  const handleShow = () => setLoginShow(true);

  //Login check
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Logeado")
        const uid = user.uid;
        getUserConfig(uid);
      } else {
        console.log("No logeado")
        handleShow();
      }
    });
  },[onAuthStateChanged]);

  //Register Function
  const onRegister = async (e) => {
    e.preventDefault();
    
    await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            window.location.reload();
            //Create user in database
            createUserDb(user.uid)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
  }

  //Login Function
  const onLogin = (e) => {
    e.preventDefault();
    
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            window.location.reload();
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
  }

  //Logout function
  const handleLogout = () => {               
        signOut(auth).then(() => {
        // Sign-out successful.
            handleClose();
            console.log("Signed out successfully")
            window.location.reload();
        }).catch((error) => {
        // An error happened.
        });
  }

  //Create user in database
  const createUserDb = async (uid) => {
    try {
      // Add a new document in collection "cities" with "LA" as id
      await setDoc(doc(db, "users", uid), {
        currency: 0,
        wallpaper: 0
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  //Get user configuration
  const getUserConfig = async (uid: string) => {
    const q = query(collection(db, "users"), where(documentId(), '==', uid));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const cfg = doc.data();
      setWallpaper(wallpaperList[cfg.wallpaper]);
      setConfig(cfg.currency);
      console.log(config)
    });
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
                  <LeftComponent userConfig={config}></LeftComponent>
                </div>
                <div className="col-md-3">
                  <RightComponent userConfig={config}></RightComponent>
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
                  <a href="#"><Image onClick={() => setWallpaper(wallpaperList[0])} src="wallpapers/Background1.gif" thumbnail alt="Wallpaper 1"/></a>
                </Col>
                <Col className={styles.gif} xs={6} md={4}>
                  <a href="#"><Image onClick={() => setWallpaper(wallpaperList[1])} src="wallpapers/Background2.gif" thumbnail alt="Wallpaper 2"/></a>
                </Col>
                <Col className={styles.gif} xs={6} md={4}>
                  <a href="#"><Image onClick={() => setWallpaper(wallpaperList[2])} src="wallpapers/Background3.gif" thumbnail alt="Wallpaper 3"/></a>
                </Col>
                <Col className={styles.gif} xs={6} md={4}>
                  <a href="#"><Image onClick={() => setWallpaper(wallpaperList[3])} src="wallpapers/background4.gif" thumbnail alt="Wallpaper 4"/></a>
                </Col>
              </Row>
            </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleLogout}>
            Cerrar Sesion
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={loginShow}
        backdrop="static"
        keyboard={false}
        centered>
        <Modal.Header>
          <Modal.Title>Bienvenido!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h2>Iniciar Sesion</h2>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" onChange={(e)=>setEmail(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" onChange={(e)=>setPassword(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={onLogin}>
              Iniciar Sesion
            </Button>
          </Form>
          <hr></hr>
          <h2>Crear cuenta</h2>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" onChange={(e)=>setEmail(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" onChange={(e)=>setPassword(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={onRegister}>
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
