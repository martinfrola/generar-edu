import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Cart from "../img/shopping-cart.png";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="bg-dark navigation">
      <div className="d-flex container">
        <Navbar expand="lg" className="w-100 pe-2">
          <Link to="/">
            <Navbar.Brand href="#home" className="text-light">
              Generar Edu
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0"/>
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

              <Link to="/">
                <Nav.Link href="#link" className="text-light text-text">
                  Cerrar Sesión
                </Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Link to="/" className="cart-icon ">
          <img  src={Cart} alt="Shopping cart" />
        </Link>
      </div>
    </div>
  );
}
