import React from "react";
import Facebook from "../img/facebook.png";
import Instagram from "../img/instagram.png";
export default function Footer() {
  return (
    <footer className="bg-light text-dark pt-3">
      <div className="row container m-auto pb-3">
        <div className="col-md-4 text-center pb-3">
          <h4 className="text-subtitle">Nuestras Redes</h4>
          <div className="redes-logo pt-1">
            <a href="/">
              <img src={Facebook} alt="facebook logo red color" />
            </a>
            <a href="/">
              <img src={Instagram} alt="instagram color red color" />
            </a>
          </div>
        </div>
        <div className="col-md-4 text-center pb-3">
          <h4 className="text-subtitle">Nuestros Cursos</h4>
          <div className="cursos">
            <a className="text-text" href="/">Modulo 1: curso X</a>
            <a className="text-text" href="/">Modulo 2: curso Y</a>
            <a className="text-text" href="/">Modulo 3: curso Z</a>
            <a className="text-text" href="/">Modulo 4: curso W</a>
            <a className="text-text" href="/">Modulo 5: curso M</a>
          </div>
        </div>
        <div className="col-md-4 text-center contacto pb-3">
          <h4 className="text-subtitle">Contactanos</h4>
          <a className="text-text" href="/">+54-9291-4418765</a>
          <a className="text-text" href="/">generaredu@edu.com</a>
        </div>
      </div>
      <div className=" container text-center">
        <p className="text-text">Todos los derechos reservados 2021 &copy; Generar Edu </p>
        <div className="tench">
          <p className=" text-details">Creado por</p>
          <a className=" text-details" href="/">Tench</a>
        </div>
      </div>
    </footer>
  );
}
