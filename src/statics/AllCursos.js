import React from "react";
import CardCurso from "./CardCurso";

export default function AllCursos() {
  return (
    <div className="bg-light pt-5">
      <h1 className="text-dark text-center pb-5 text-title fw-bold">
        Mirá nuestros cursos
      </h1>
      <div className="container row m-auto">
        <CardCurso name="Modulo 1" precio={1000} id={1} ruta="/modulo/1" />
        <CardCurso name="Modulo 2" precio={2000} id={2} ruta="/modulo/1" />
        <CardCurso name="Modulo 3" precio={3000} id={3} ruta="/modulo/1" />
        <CardCurso name="Modulo 4" precio={4000} id={4} ruta="/modulo/1" />
        <CardCurso name="Modulo 5" precio={5000} id={5} ruta="/modulo/1" />
      </div>
    </div>
  );
}
