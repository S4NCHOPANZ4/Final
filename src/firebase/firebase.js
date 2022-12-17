import firebase from "firebase/compat/app"
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCHYyyNMZy4pGz-mK8DrpNeXmHGGVTFDiM",
    authDomain: "tinder-clone-175c1.firebaseapp.com",
    databaseURL: "https://tinder-clone-175c1-default-rtdb.firebaseio.com",
    projectId: "tinder-clone-175c1",
    storageBucket: "tinder-clone-175c1.appspot.com",
    messagingSenderId: "581557183952",
    appId: "1:581557183952:web:5210dcf00dd7a0480ec5d5",
    measurementId: "G-ZNKK1G1MFT"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig)
const database = firebaseApp.firestore()

export default database;