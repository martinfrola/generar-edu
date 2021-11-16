import React, { useState, useEffect } from "react";
import CardMisCursos from "../statics/CardMisCursos";
import { app } from "../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
function MisCursos(props) {
  const { history } = props;

  //Consulta a la autenticación de usuario para obtener datos
  const auth = getAuth();

  useEffect(() => {
    //Verifico si hay usuario
    onAuthStateChanged(auth, (user) => {
      //Si hay usuario..

      if (!user) {
        history.push("/login");
      }
    });
  }, []);

  const url = "https://generaredu.herokuapp.com/modulos";
  const [cardData, setCardData] = useState({});
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCardData(data));
  }, []);

  return (
    <div className="mis-cursos">
      <h1 className="text-subtitle fw-bold text-center py-5 text-dark">
        ¡Sigue aprendiendo en tus cursos!
      </h1>
      <main className="container mis-cursos-content m-auto justify-content-between pb-5">
        {cardData.length > 0 ? (
          cardData.map((item, i) => <CardMisCursos key={i} {...item} />)
        ) : (
          <p className="w-100 ">
            Ups, parece que todavía no has comprado ningún curso.
          </p>
        )}
      </main>
    </div>
  );
}

export default MisCursos;
