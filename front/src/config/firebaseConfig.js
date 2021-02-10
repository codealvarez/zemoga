import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
const app = firebase.default.initializeApp({
    apiKey: "AIzaSyBxvY0l1l7R5kXejCG3k25vZ1FOgl3lZLs",
    authDomain: "zemoga-codealvarez.firebaseapp.com",
    projectId: "zemoga-codealvarez",
    storageBucket: "zemoga-codealvarez.appspot.com",
    messagingSenderId: "141018126281",
    appId: "1:141018126281:web:dd5545e396d1bc3ab13a18",
    measurementId: "G-5L87MS6F8V"
});

export {app};

