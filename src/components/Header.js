import React from "react";
import Carousel from "react-bootstrap/Carousel";

import "../backgrounds.css";
export default function Header() {
  return (
    <Carousel fade className="carousel ">
      <Carousel.Item>
        <div className="bg-image slide-1"></div>
        <Carousel.Caption className="slide-text">
          <h3 className="text-dark fs-1">LLEVANDOTE A LA PRÁCTICA</h3>
          <p className="text-dark fs-3">
            Aprende a llevar a la práctica todos tus conocimientos!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="bg-image slide-2"></div>

        <Carousel.Caption className="slide-text">
          <h3 className="text-dark fs-1">APRENDE SOBRE REHABILITACIÓN</h3>
          <p className="text-dark fs-3">
            Aprende como abordar a distintos tipos de pacientes para diferentes
            patologías
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="bg-image slide-3"></div>

        <Carousel.Caption className="slide-text">
          <h3 className="text-dark fs-1">
            ESTUDIA DESDE CUALQUIER PARTE DEL MUNDO
          </h3>
          <p className="text-dark fs-3">
            No importa donde estés, seguí capacitandote con nuestros cursos y
            aprende a dar tus primeros pasos en la profesión
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
