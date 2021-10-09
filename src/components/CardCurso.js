import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ImgCurso from "../img/curso-1.jpg";
export default function CardCurso() {
  window.addEventListener("scroll", animation);

  function animation() {
    const actives = document.querySelectorAll(".animation-card");

    if (window.scrollY >= 300) {
      actives.forEach((active) => {
        active.classList.add("show");
        active.classList.remove("hide");
      });
    } else if (window.scrollY <= 10) {
      actives.forEach((active) => {
        active.classList.remove("show");
        active.classList.add("hide");
      });
    }
  }

  return (
    <div className="col-lg-4 col-md-6 mb-5 animation-card hide">
      <Card className="bg-secondary card-curso border-0 rounded-3">
        <Card.Img variant="top" src={ImgCurso} className="w-100" />
        <Card.Body className="bg-secondary ">
          <Card.Title className="text-dark text-subtitle fw-bold">
            Card Title
          </Card.Title>
          <Card.Text className="text-dark text-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <div className="text-center">
            <div className="d-flex justify-content-between">
              <Button variant="primary" className="text-light me-1 text-text">
                Mas Información
              </Button>
              <Button variant="primary" className="text-light ms-1 text-text">
                Agregar al Carrito
              </Button>
            </div>
            <Card.Text className="py-3 m-0 fs-3 fw-bold text-dark text-subtitle">
              $5000{" "}
            </Card.Text>
            <Button
              variant="primary"
              className="btn-dark mt-0 w-100 text-light text-subtitle"
            >
              Comprar
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
