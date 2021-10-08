import React, { useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Cart from "../img/shopping-cart.png";
import { Link } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";
export default function Navigation() {
  const firebaseApp = initializeApp({
    apiKey: "AIzaSyAlgpl1EmHS5efB6iXH3aL97A5LY3ohsE4",
    authDomain: "generaredu.firebaseapp.com",
    projectId: "generaredu",
    storageBucket: "generaredu.appspot.com",
    messagingSenderId: "1080331879362",
    appId: "1:1080331879362:web:58551bd3aae910389a0c5b",
    measurementId: "G-F7EK0RVW5G",
  });

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const iniciarSesion = document.querySelector(".iniciar-sesion");
        const cerrarSesion = document.querySelector(".cerrar-sesion");
        iniciarSesion.classList.add("hide");
        cerrarSesion.classList.remove("hide");
      } else {
        const cerrarSesion = document.querySelector(".cerrar-sesion");
        const iniciarSesion = document.querySelector(".iniciar-sesion");
        cerrarSesion.classList.add("hide");
        iniciarSesion.classList.remove("hide");
      }
    });
  });
  const auth = getAuth();
  function signOutUser() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log("Cerraste Sesion");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="bg-dark navigation">
      <div className="d-flex container">
        <Navbar expand="lg" className="w-100 pe-2">
          <Link to="/">
            <Navbar.Brand href="#home" className="text-light">
              Generar Edu
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="border-0"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-end">
              <Link to="/miscursos">
                <Nav.Link href="#home" className="text-light text-text">
                  Mi Cursos
                </Nav.Link>
              </Link>

              <Link to="/contacto">
                <Nav.Link href="#link" className="text-light text-text">
                  Contacto
                </Nav.Link>
              </Link>

              <Link to="/" className="cerrar-sesion" onClick={signOutUser}>
                <Nav.Link href="#link" className="text-light text-text">
                  Cerrar Sesión
                </Nav.Link>
              </Link>
              <Link to="/login" className="iniciar-sesion">
                <Nav.Link href="#link" className="text-light text-text">
                  Iniciar Sesión
                </Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Link to="/" className="cart-icon ">
          <img src={Cart} alt="Shopping cart" />
        </Link>
      </div>
    </div>
  );
}
