import { initializeApp } from "firebase/app";


const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID
  apiKey: "AIzaSyA-6kZAJsUOD3Klls8RUI07HouFtrf6ttw",
  authDomain: "mapreact-5dec3.firebaseapp.com",
  projectId: "mapreact-5dec3",
  storageBucket: "mapreact-5dec3.appspot.com",
  messagingSenderId: "872030377063",
  appId: "1:872030377063:web:ff09456828f7968b1b30c2"
};


const app = initializeApp(firebaseConfig);
