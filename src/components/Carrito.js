import React, { useEffect, useState } from "react";
import CardCarrito from "../statics/CardCarrito";
import { useCarrito } from "../context/CarritoProvider";
import { initialCarrito } from "../context/CarritoRedicer";
import Button from "react-bootstrap/Button";
import { app } from "../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function Carrito(props) {
  const [{ productos }, dispatch] = useCarrito(initialCarrito);
  let costo = 0;
  let cantidad = productos.length;
  let nombreCursos = "";

  const [user, setUser] = useState();
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        props.history.push("/login");
      }
    });
  }, []);
  if (user) {
    console.log(user.uid);
  }
  productos.map((producto, i) => {
    costo = costo + producto.precio;
    nombreCursos = nombreCursos + "---" + productos[i].nombre;
  });

  return (
    <div className="carrito container mb-5">
      <h1 className="py-5  text-center text-subtitle text-dark">
        {cantidad === 0
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

      {cantidad !== 0 ? (
        <h3 className="text-subtitle text-dark fw-bold text-end">
          Total: ${costo}{" "}
        </h3>
      ) : (
        ""
      )}
      {user ? (
        <form action="http://localhost:3001/pagos/" method="POST">
          <input type="hidden" name="title" value={nombreCursos} />
          <input type="hidden" name="price" value={costo} />
          <input type="hidden" name="userId" value={user.uid} />
          <button type="submit">Comprar</button>
        </form>
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
