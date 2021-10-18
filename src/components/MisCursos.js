import React from "react";
import CardMisCursos from "../statics/CardMisCursos";
function MisCursos(props) {
  const { history } = props;
  return (
    <div className="mis-cursos">
      <h1 className="text-subtitle fw-bold text-center py-5">
        ¡Sigue aprendiendo en tus cursos!
      </h1>
      <main className="container mis-cursos-content m-auto justify-content-between pb-5">
        <CardMisCursos history={history} />
        <CardMisCursos history={history} />
        <CardMisCursos history={history} />
        <CardMisCursos history={history} />
      </main>
    </div>
  );
}

export default MisCursos;
