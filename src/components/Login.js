import React, { useState } from "react";
import Facebook from "../img/facebook.png";
import Google from "../img/google.png";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";
export default function Login(props) {
  const firebaseApp = initializeApp({
    apiKey: "AIzaSyAlgpl1EmHS5efB6iXH3aL97A5LY3ohsE4",
    authDomain: "generaredu.firebaseapp.com",
    projectId: "generaredu",
    storageBucket: "generaredu.appspot.com",
    messagingSenderId: "1080331879362",
    appId: "1:1080331879362:web:58551bd3aae910389a0c5b",
    measurementId: "G-F7EK0RVW5G",
  });

  const [userLog, setUser] = useState({
    email: "",
    psw: "",
  });

  function handleChange(e) {
    setUser({
      ...userLog,
      [e.target.name]: e.target.value,
    });
  }
  console.log(userLog);
  function ShowForm() {
    const hide = document.querySelector(".container-login");
    const show = document.querySelector(".new-acount");
    hide.classList.toggle("hide");
    show.classList.toggle("hide");
  }

  function signInGoogle() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        props.history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function signInFacebook() {
    const provider = new FacebookAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        props.history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleLogin(e) {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, userLog.email, userLog.psw)
      .then((userCredential) => {
        props.history.push("/");
      })
      .catch((error) => {
        console.log("hubo un error", error);
        // ..
      });
  }

  function handleNewAcount(e) {
    const newAuth = getAuth();
    createUserWithEmailAndPassword(newAuth, userLog.email, userLog.psw)
      .then((userCredential) => {
        props.history.push("/");
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
    e.preventDefault();
  }

  return (
    <div className="login bg-white">
      <h2 className="text-center pt-5  text-subtitle">
        Inicia sesión en tu cuenta
      </h2>
      <div className="container-login mx-auto mb-5 text-center show-form">
        <div className="buttons">
          <div className="login-btn" onClick={signInFacebook}>
            <img src={Facebook} alt="" />
            <p className="text-text fw-bold text-dark">
              Iniciá sesión con Facebook
            </p>
          </div>
          <div className="login-btn" onClick={signInGoogle}>
            <img src={Google} alt="" />
            <p className="text-text fw-bold text-dark">
              Iniciá sesión con Google
            </p>
          </div>

          <h3 className="text-subtitle text-dark">Ingresá con tu email</h3>
          <form className="login-email d-flex flex-column">
            <input
              type="email"
              name="email"
              placeholder="Tu Email"
              onChange={handleChange}
            />
            <input
              type="password"
              name="psw"
              placeholder="Tu Contraseña"
              onChange={handleChange}
            />
            <button
              className="btn text-text bg-dark text-light"
              onClick={handleLogin}
            >
              {" "}
              Inicia sesión
            </button>
          </form>
          <div className="btns">
            <p>¿No tienes una cuenta?</p>
            <button
              className="btn text-text bg-dark text-light"
              onClick={ShowForm}
            >
              {" "}
              Crear cuenta
            </button>
          </div>
        </div>
      </div>
      <div className="new-acount bg-dark pt-4 hide text-text">
        <button
          className="bg-light border-0 rounded-1 mb-3 btn-volver"
          onClick={ShowForm}
        >
          Volver
        </button>
        <h3 className="text-text text-center text-light pb-4">
          Crea tu cuenta y lleva tus conocimientos a la práctica.
        </h3>
        <form
          className="login-email d-flex flex-column"
          onSubmit={handleNewAcount}
        >
          <input type="text" name="name" placeholder="Nombre completo" />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            onChange={handleChange}
          />
          <input
            type="password"
            name="psw"
            placeholder="Contraseña"
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-light border-0 rounded-1 mb-3 btn-crear"
          >
            Crear
          </button>
        </form>
      </div>
    </div>
  );
}
