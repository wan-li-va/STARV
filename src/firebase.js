import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const config = {
    apiKey: "AIzaSyD0GqnO7-6Ftd-NaHKYsOH4eswCHy_Hqu8",
    authDomain: "starv-1a153.firebaseapp.com",
    databaseURL: "https://starv-1a153.firebaseio.com",
    projectId: "starv-1a153",
    storageBucket: "starv-1a153.appspot.com",
    messagingSenderId: "124354134927",
    appId: "1:124354134927:web:0e7c6b5d7d9ca5521e81fa",
    measurementId: "G-G8B4VWS1MG"
};

firebase.initializeApp(config)

export default firebase;