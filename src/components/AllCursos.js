import React from "react";
import CardCurso from "./CardCurso";

export default function AllCursos() {
  return (
    <div className="bg-light pt-5">
      <h1 className="text-dark text-center pb-5 text-title fw-bold">
        Mirá nuestros cursos
      </h1>
      <div className="container row m-auto">
        <CardCurso name="Modulo 1" ruta="/modulo/1" />
        <CardCurso name="Modulo 2" ruta="/modulo/1" />
        <CardCurso name="Modulo 3" ruta="/modulo/1" />
        <CardCurso name="Modulo 4" ruta="/modulo/1" />
        <CardCurso name="Modulo 5" ruta="/modulo/1" />
      </div>
    </div>
  );
}
