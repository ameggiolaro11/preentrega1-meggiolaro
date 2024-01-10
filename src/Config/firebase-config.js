import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBkMYJCbzZu4HAvIuBHdPeZIyWCy8YRtko",
    authDomain: "entregafinalreact1.firebaseapp.com",
    projectId: "entregafinalreact1",
    storageBucket: "entregafinalreact1.appspot.com",
    messagingSenderId: "579560480323",
    appId: "1:579560480323:web:78e38252495bdc25dd3ef6",
    measurementId: "G-XE5BWS94C1"
  };

  
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Exportamos la base de datos
export const db = getFirestore(app);
