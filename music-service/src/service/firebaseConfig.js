import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBgp8IQxr4FdYvZw4imtRysiP6A9806_bk",
  authDomain: "music-service-4-04.firebaseapp.com",
  projectId: "music-service-4-04",
  storageBucket: "music-service-4-04.appspot.com",
  messagingSenderId: "976957345871",
  appId: "1:976957345871:web:16774ac0f2e983f3f29a3a",
  measurementId: "G-GDHZKJE9LG"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
