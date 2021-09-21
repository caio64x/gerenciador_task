import firebase from "firebase"
import "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCU9wWqcibbOecaCFLDajnhm1sA-AlTT8E",
  authDomain: "gerenciadortask.firebaseapp.com",
  projectId: "gerenciadortask",
  storageBucket: "gerenciadortask.appspot.com",
  messagingSenderId: "470342335327",
  appId: "1:470342335327:web:4163d268c6e6991da154ea"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();
export default database