import React from "react";
import ReactDOM from "react-dom";
import "./sass/app.scss";
import "./bootstrap.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

const firebaseConfig = {
  apiKey: "AIzaSyAlgpl1EmHS5efB6iXH3aL97A5LY3ohsE4",
  authDomain: "generaredu.firebaseapp.com",
  projectId: "generaredu",
  storageBucket: "generaredu.appspot.com",
  messagingSenderId: "1080331879362",
  appId: "1:1080331879362:web:58551bd3aae910389a0c5b",
  measurementId: "G-F7EK0RVW5G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
