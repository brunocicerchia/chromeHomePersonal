'use client'
import styles from "./styles.module.css";
//React Components
import FastComponent from "./FastComponent/FastComponent";
import RightBoxComponent from "./BoxComponent/RightBoxComponent";
import LeftBoxComponent from "./BoxComponent/LeftBoxComponent";
import { useState, useEffect } from "react";
import WallpaperChangeComponent from './Components/WallpaperChangeComponent/WallpaperChangeCompoent';

//login and register imports
import { auth } from "./firebase";
import { onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
//Database imports
import { db } from "./firebase";
import { collection, getDocs, query, where, setDoc, doc, documentId, updateDoc } from "firebase/firestore";

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
  //WallpaperChangeComponent state
  const [wallpaperCallback, setWallpaperCallback] = useState();
  
  //Login credential state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [uid, setUid] = useState('');

  //Wallpaper change state
  const wallpaperList = [
    "https://firebasestorage.googleapis.com/v0/b/chromehome-eab2d.appspot.com/o/Background1.mp4?alt=media&token=31f670a7-e7c9-4c1d-acd5-861f4b5bee87",
    "https://firebasestorage.googleapis.com/v0/b/chromehome-eab2d.appspot.com/o/Background2.mp4?alt=media&token=fe913967-0c37-489c-9c67-dda7b0349cb4",
    "https://firebasestorage.googleapis.com/v0/b/chromehome-eab2d.appspot.com/o/Background3.mp4?alt=media&token=06443005-449e-4d6d-b157-3150b5b85301",
    "https://firebasestorage.googleapis.com/v0/b/chromehome-eab2d.appspot.com/o/Background4.mp4?alt=media&token=e49a952d-5209-4055-a5ab-7e034d783b5f",
    "https://firebasestorage.googleapis.com/v0/b/chromehome-eab2d.appspot.com/o/Background5.mp4?alt=media&token=e4e2fc6d-9c1d-4949-a816-d79043f4f1d7",
    "https://firebasestorage.googleapis.com/v0/b/chromehome-eab2d.appspot.com/o/Background6.mp4?alt=media&token=9d87ce1b-3761-44c5-8b72-b438e118080f",
    "https://firebasestorage.googleapis.com/v0/b/chromehome-eab2d.appspot.com/o/Background7.mp4?alt=media&token=2c427f2a-49c2-48ea-8177-f2d1def9b643",
    "https://firebasestorage.googleapis.com/v0/b/chromehome-eab2d.appspot.com/o/Background8.mp4?alt=media&token=176f6d9e-2de5-4d9f-913c-0947f281a87d",
    "https://firebasestorage.googleapis.com/v0/b/chromehome-eab2d.appspot.com/o/Background9.mp4?alt=media&token=b4eecc70-78ce-4dee-a3b4-7699d0ef2f63",
    "https://firebasestorage.googleapis.com/v0/b/chromehome-eab2d.appspot.com/o/Background10.mp4?alt=media&token=1c3c7467-60bd-4a06-9c37-992b44964b6a",
    "https://firebasestorage.googleapis.com/v0/b/chromehome-eab2d.appspot.com/o/Background11.mp4?alt=media&token=68fe403d-c10c-447e-908b-7db2e6d4022f"
  ]

  const [wallpaper, setWallpaper] = useState("");
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
        setUid(user.uid);
        getUserConfig(user.uid);
      } else {
        console.log("No logeado")
        setWallpaper(wallpaperList[
        //Math.floor(Math.random() * 12)
        0
        ]);
        handleShow();
      }
    });
  },[onAuthStateChanged]);

  useEffect(() => {
    wallpaperSetter(wallpaperCallback)
  },[wallpaperCallback]);

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
            //window.location.reload();
            handleClose();
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
    });
  }

  //Wallpaper Setter
  const wallpaperSetter = (numero) => {
    if(numero != null) {
      setWallpaper(wallpaperList[numero])
      updateWallpaper(numero)
    }    
  }

   //WallpaperCallbackReceiver
  const recibirDatos = (datosRecibidos) => {
    setWallpaperCallback(datosRecibidos);
  };

  //Update currency in database
  const updateWallpaper = async (numero) => {
    const userRef = doc(db, "users", uid);

    // Set the "capital" field of the city 'DC'
    await updateDoc(userRef, {
        wallpaper: numero,
      });
  }

  return (
    <div style={styles}>
      <video controls preload="auto" hidden>
        <source src={wallpaper} type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
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
                  <LeftBoxComponent userConfig={config}></LeftBoxComponent>
                </div>
                <div className="col-md-3">
                  <RightBoxComponent userConfig={config}></RightBoxComponent>
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
          <WallpaperChangeComponent enviarDatos={recibirDatos} />
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
              <Form.Control id="current-password" type="password" onChange={(e)=>setPassword(e.target.value)} />
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
              <Form.Control id="new-password" type="password" onChange={(e)=>setPassword(e.target.value)} />
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
