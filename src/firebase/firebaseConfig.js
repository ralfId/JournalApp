import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD-DjJLkfN6G2xxbsFO1gDrkZcYK_71Ikc",
    authDomain: "journal-app-d1a3e.firebaseapp.com",
    projectId: "journal-app-d1a3e",
    storageBucket: "journal-app-d1a3e.appspot.com",
    messagingSenderId: "62681961631",
    appId: "1:62681961631:web:5ce7d4f96bbf07e1277eaa"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase }