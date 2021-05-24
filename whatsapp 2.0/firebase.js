import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB2fQG1Gwr83A9cRpDcoYNVlWsZvo6K2LE",
    authDomain: "whatsapp-clone-me.firebaseapp.com",
    projectId: "whatsapp-clone-me",
    storageBucket: "whatsapp-clone-me.appspot.com",
    messagingSenderId: "934010876771",
    appId: "1:934010876771:web:81dc150b44154bbf6c9956"
};

const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };