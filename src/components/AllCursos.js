import React from "react";
import CardCurso from "./CardCurso";

export default function AllCursos() {
  return (
    <div className="bg-light pt-5">
      <h1 className="text-dark text-center pb-5 text-title fw-bold">Mirá nuestros cursos</h1>
      <div className="container row m-auto">
        <CardCurso />
        <CardCurso />
        <CardCurso />
        <CardCurso />
        <CardCurso />
      </div>
    </div>
  );
}
