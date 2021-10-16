import React from "react";
import CardCarrito from "../statics/CardCarrito";
import { useCarrito } from "../context/CarritoProvider";
import { initialCarrito } from "../context/CarritoRedicer";
import Button from "react-bootstrap/Button";
export default function Carrito() {
  const [{ productos }, dispatch] = useCarrito(initialCarrito);
  let costo = 0;

  productos.map((producto) => {
    costo = costo + producto.precio;
  });
  return (
    <div className="carrito container mb-5">
      <h1 className="py-5  text-center text-subtitle text-dark">
        {productos.length === 0
          ? "No agregaste ningún curso"
          : "Agregaste estos cursos al carrito"}
      </h1>
      {productos.map((producto, i) => (
        <CardCarrito
          nombre={producto.nombre}
          precio={producto.precio}
          id={producto.id}
          key={i}
        />
      ))}

      {productos.length !== 0 ? (
        <h3 className="text-subtitle text-dark fw-bold text-end">
          Total: ${costo}{" "}
        </h3>
      ) : (
        ""
      )}
      <div className="text-center w-100">
        {productos.length !== 0 ? (
          <Button className="btn-dark border border-primary text-light fw-bold text-text text-center">
            COMPRAR AHORA
          </Button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
