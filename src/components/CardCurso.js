import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ImgCurso from "../img/curso-3.jpg";
export default function CardCurso() {
  return (
    <div className="col-lg-4 col-md-6 mb-5">
      <Card className="bg-secondary card-curso border-0 rounded-3">
        <Card.Img variant="top" src={ImgCurso} className="w-100" />
        <Card.Body className="bg-secondary ">
          <Card.Title className="text-dark">Card Title</Card.Title>
          <Card.Text className="text-dark">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <div className="text-center">
            <div className="d-flex justify-content-between">
              <Button variant="primary" className="text-light me-1">
                Mas Información
              </Button>
              <Button variant="primary" className="text-light ms-1">
                Agregar al Carrito
              </Button>
            </div>
            <Card.Text className="py-3 m-0 fs-3 fw-bold text-dark">
              $5000{" "}
            </Card.Text>
            <Button
              variant="primary"
              className="btn-dark mt-0 w-100 text-light"
            >
              Comprar
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
