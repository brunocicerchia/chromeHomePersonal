import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAYLPRweSuOhE4mC-dZYTPzrPKrH1Py3W8",
    authDomain: "chromehome-eab2d.firebaseapp.com",
    projectId: "chromehome-eab2d",
    storageBucket: "chromehome-eab2d.appspot.com",
    messagingSenderId: "843228228425",
    appId: "1:843228228425:web:c8a9058295f20419390898",
    measurementId: "G-M8ZYHCVTFT"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;