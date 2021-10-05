import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Cart from "../img/shopping-cart.png";
export default function Navigation() {
  return (
    <div className="bg-dark">
      <div className="d-flex container">
        <Navbar expand="lg" className="w-100 pe-2">
          <Navbar.Brand href="#home" className="text-light">
            Generar Edu
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-end">
              <Nav.Link href="#home" className="text-light">
                Mi Cursos
              </Nav.Link>
              <Nav.Link href="#link" className="text-light">
                Contacto
              </Nav.Link>
              <Nav.Link href="#link" className="text-light">
                Cerrar Sesión
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <img className="cart-icon " src={Cart} alt="Shopping cart" />
      </div>
    </div>
  );
}
