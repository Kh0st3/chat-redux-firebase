import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDpOBYNxTMjnu_cP9Ut_RzD5O2oCT934ss",
    authDomain: "chatfirestore-194dc.firebaseapp.com",
    projectId: "chatfirestore-194dc",
    storageBucket: "chatfirestore-194dc.firebasestorage.app",
    messagingSenderId: "283643466651",
    appId: "1:283643466651:web:dd705ac4bfa0babb04c73e"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider };