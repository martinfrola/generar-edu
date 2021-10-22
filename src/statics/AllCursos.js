import React, { useEffect, useState } from "react";
import CardCurso from "./CardCurso";

export default function AllCursos() {
  const url = "https://generaredu.herokuapp.com/modulos";
  const [cursos, setCursos] = useState(0);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCursos(data));
  }, []);

  return (
    <div className="bg-light pt-5">
      <h1 className="text-dark text-center pb-5 text-title fw-bold">
        Mirá nuestros cursos
      </h1>
      <div className="container row m-auto">
        {cursos.length > 0 &&
          cursos.map((curso, i) => <CardCurso key={i} {...curso} />)}
      </div>
    </div>
  );
}
