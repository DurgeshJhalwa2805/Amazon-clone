import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCCqWC8asHZNQeN6xmj_EkDgBYUOWk1Ork",
    authDomain: "clone-e8d29.firebaseapp.com",
    projectId: "clone-e8d29",
    storageBucket: "clone-e8d29.appspot.com",
    messagingSenderId: "901301367647",
    appId: "1:901301367647:web:189419bb1f162cd0bb7cea",
    measurementId: "G-2GYF9KN6GK"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db =firebaseApp.firestore();
  const auth=firebase.auth();

  export {db,auth}; 