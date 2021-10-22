import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useCarrito } from "../context/CarritoProvider";
import { actionTypes } from "../context/CarritoRedicer";

export default function CardCurso(props) {
  const { portada } = props;
  console.log(props);
  window.addEventListener("scroll", animation);

  function animation() {
    const actives = document.querySelectorAll(".animation-card");
    if (window.scrollY >= 300) {
      actives.forEach((active) => {
        active.classList.add("show-animation");
        active.classList.remove("hide");
      });
    } else if (window.scrollY <= 10) {
      actives.forEach((active) => {
        active.classList.remove("show-animation");
        active.classList.add("hide");
      });
    }
  }
  const path = `/modulo/${props.idModulo}`;
  const [{ productos }, dispatch] = useCarrito();

  function addCarrito() {
    console.log("Click");
    dispatch({
      type: actionTypes.AGREGAR_AL_CARRITO,
      item: {
        nombre: props.titulo,
        precio: props.precio,
        id: props.id,
      },
    });
  }

  return (
    <div className="col-lg-3 col-md-6 mb-5 animation-card hide">
      <Card className="bg-secondary card-curso border-0 rounded-3">
        <Card.Img
          variant="top"
          src={
            "https://generaredu.herokuapp.com/modulos" +
            portada.formats.medium.url
          }
          className="w-100"
        />

        <Card.Body className="bg-secondary ">
          <Card.Title className="text-dark text-text fw-bold">
            {props.titulo}
          </Card.Title>
          <Card.Text className="text-dark text-details card-curso-description">
            {props.descripcionCorta}
          </Card.Text>
          <div className="text-center">
            <div className="d-flex justify-content-between">
              <Link to={path}>
                <Button
                  variant="primary"
                  className="text-light me-1 text-details"
                >
                  Mas Información
                </Button>
              </Link>
              <Button
                variant="primary"
                className="text-light ms-1 text-details"
                onClick={addCarrito}
              >
                Agregar al Carrito
              </Button>
            </div>
            <Card.Text className="py-3 m-0 fs-3 fw-bold text-dark text-text">
              ${props.precio}
            </Card.Text>

            <Button
              variant="primary"
              className="btn-dark mt-0 w-100 text-light text-text"
            >
              Comprar
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
