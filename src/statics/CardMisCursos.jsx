import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ImgCurso from "../img/curso-1.jpg";
import Play from "../img/play.png";
function CardMisCursos(props) {
  const { titulo, idModulo, portada } = props;
  const imgUrl =
    "https://generaredu.herokuapp.com/modulos" + portada.formats.small.url;

  useEffect(() => {
    if (window.innerWidth < 768) {
      const btnGo = document.querySelectorAll(".btn-go-curso");
      btnGo.forEach((element) => {
        element.classList.remove("hide");
      });
    }
  }, []);

  const path = `/viewcurso/${idModulo}`;
  console.log(path);
  return (
    <Link to={path} className="text-decoration-none text-dark">
      <div className="card-mis-cursos bg-secondary rounded  m-2 py-2 px-2">
        <div className="go-to-curso">
          <img src={imgUrl} alt={titulo} className="w-100 rounded go-img " />
          <img className="go-icon" src={Play} alt="play button" />
        </div>

        <h3 className="text-text fw-bold pt-2">{titulo}</h3>
        <p className="text-text">Continúa con tu curso</p>
        <Link to={path} className="hide btn-go-curso">
          <button className="btn btn-dark text-light ">Ver curso</button>
        </Link>
      </div>
    </Link>
  );
}

export default CardMisCursos;
