// // import { initializeApp } from "firebase/app";
// import firebase from './firebase'
// const firebaseConfig = {
//     apiKey: "AIzaSyBhXUd6UFLvDj45L4u2q_bQOat2cGvDWUk",
//     authDomain: "taskauth-f6fb2.firebaseapp.com",
//     projectId: "taskauth-f6fb2",
//     storageBucket: "taskauth-f6fb2.appspot.com",
//     messagingSenderId: "355042728239",
//     appId: "1:355042728239:web:2171db47358447683da9da"
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// const db = firebase.fireStore();
// const auth = firebase.auth();

// export { auth };
// export default db;

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBhXUd6UFLvDj45L4u2q_bQOat2cGvDWUk",
    authDomain: "taskauth-f6fb2.firebaseapp.com",
    projectId: "taskauth-f6fb2",
    storageBucket: "taskauth-f6fb2.appspot.com",
    messagingSenderId: "355042728239",
    appId: "1:355042728239:web:2171db47358447683da9da"

};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();