import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

// Initialize Firebase with configuration
if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyCT_NzPyxbfuglyDgyWcBWziwajC1ZUaAg",
    authDomain: "noteapp-101dz.firebaseapp.com",
    databaseURL: "https://noteapp-101dz-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "noteapp-101dz",
    storageBucket: "noteapp-101dz.firebasestorage.app",
    messagingSenderId: "304701363804",
    appId: "1:304701363804:web:26cce09b91ec1c5eaef899"
  });
}

const FIREBASE = firebase;
export default FIREBASE;
