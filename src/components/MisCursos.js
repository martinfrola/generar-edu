import React, { useState, useEffect } from "react";
import CardMisCursos from "../statics/CardMisCursos";
function MisCursos(props) {
  const { history } = props;

  const url = "https://generaredu.herokuapp.com/modulos";
  const [cardData, setCardData] = useState({});
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCardData(data));
  }, []);
  console.log(cardData);
  return (
    <div className="mis-cursos">
      <h1 className="text-subtitle fw-bold text-center py-5">
        ¡Sigue aprendiendo en tus cursos!
      </h1>
      <main className="container mis-cursos-content m-auto justify-content-between pb-5">
        {cardData.length > 0
          ? cardData.map((item, i) => <CardMisCursos key={i} {...item} />)
          : ""}
      </main>
    </div>
  );
}

export default MisCursos;
