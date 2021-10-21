import React, { useState, useEffect } from "react";
import ListaVideos from "../statics/ListaVideos";
import video from "../video/video-example.mp4";
import Comentarios from "../statics/Comentarios";
import { app } from "../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import "firebase/compat/database";
function VisualizaciónCurso(props) {
  //Hook para consumir la data del usuario
  const [dataUser, setDataUser] = useState({
    nombre: "",
    fotoUrl: "",
    userId: "",
  });

  //Consulta a la autenticación de usuario para obtener datos
  const auth = getAuth();

  useEffect(() => {
    //Verifico si hay usuario
    onAuthStateChanged(auth, (user) => {
      //Si hay usuario..
      if (user) {
        //Consumo la data del usuario y la seteo en el hook
        setDataUser({
          nombre: user.displayName,
          fotoUrl: user.photoURL,
          userId: user.uid,
        });

        //Si no hay usuario
      } else {
        //Lo envío a la página de logeo para que se inicie sesión
        props.history.push("/login");
      }
    });
  }, []);

  return (
    <div className="view-curso bg-light">
      <div className="principal-view-curso w-100">
        <video src={video} controls controlslist="nodownload" />
        <ListaVideos dataUser={dataUser} />
      </div>

      <Comentarios dataUser={dataUser} />
    </div>
  );
}

export default VisualizaciónCurso;
