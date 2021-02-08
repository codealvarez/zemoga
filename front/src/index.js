import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "firebase/firestore";
import "firebase/auth";
import {
  FirebaseAppProvider,
  useFirestoreDocData,
  useFirestore,
} from "reactfire";

const firebaseConfig = {
  apiKey: "AIzaSyBxvY0l1l7R5kXejCG3k25vZ1FOgl3lZLs",
  authDomain: "zemoga-codealvarez.firebaseapp.com",
  projectId: "zemoga-codealvarez",
  storageBucket: "zemoga-codealvarez.appspot.com",
  messagingSenderId: "141018126281",
  appId: "1:141018126281:web:dd5545e396d1bc3ab13a18",
  measurementId: "G-5L87MS6F8V"
};

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Suspense fallback={<p>Cargando...</p>}>
      <App/>
    </Suspense>
  </FirebaseAppProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
