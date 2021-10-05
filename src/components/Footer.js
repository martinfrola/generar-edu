import React from "react";
import Facebook from "../img/facebook.png";
import Instagram from "../img/instagram.png";
export default function Footer() {
  return (
    <footer className="bg-light text-dark pt-3">
      <div className="row container m-auto pb-5">
        <div className="col-md-4 text-center">
          <h4>Nuestras Redes</h4>
          <div className="redes-logo pt-1">
            <a href="/">
              <img src={Facebook} alt="facebook logo red color" />
            </a>
            <a href="/">
              <img src={Instagram} alt="instagram color red color" />
            </a>
          </div>
        </div>
        <div className="col-md-4 text-center">
          <h4>Nuestros Cursos</h4>
          <div className="cursos">
            <a href="/">Modulo 1: curso X</a>
            <a href="/">Modulo 2: curso Y</a>
            <a href="/">Modulo 3: curso Z</a>
            <a href="/">Modulo 4: curso W</a>
            <a href="/">Modulo 5: curso M</a>
          </div>
        </div>
        <div className="col-md-4 text-center contacto">
          <h4>Contactanos</h4>
          <a href="/">+54-9291-4418765</a>
          <a href="/">generaredu@edu.com</a>
        </div>
      </div>
      <div className=" container text-center">
        <p>Todos los derechos reservados 2021 &copy; Generar Edu </p>
        <div className="tench">
          <p>Creado por</p>
          <a href="/">Tench</a>
        </div>
      </div>
    </footer>
  );
}
