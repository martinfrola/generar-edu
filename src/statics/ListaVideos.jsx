import React, { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { app } from "../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import "firebase/compat/database";

function ListaVideos(props) {
  //desestructuro las propiedades del componente
  const { userId } = props.dataUser;

  //Creo el hook con el que voy a consumir la data de la db
  const [videosVistos, setVideosVistos] = useState(0);

  useEffect(() => {
    //Referencia a la db de cada usuario para la cantidad de videos vistos
    const dbRef = app.database().ref("videosVistos/" + userId);
    dbRef.on("value", (snapshot) => {
      //Si ya existe esa db...
      if (snapshot.val()) {
        //seteo la data en el hook.
        setVideosVistos(snapshot.val().cantidad);

        //Agrego el atributo checked a la cantidad de inputs que corresponde según la cantidad de videos vistos
        const checkVideo = document.querySelectorAll(".video-check");
        checkVideo.forEach((item, i) => {
          if (i < snapshot.val().cantidad) {
            item.setAttribute("checked", true);
          }
        });

        //Si no existe la db
      } else {
        //Creamos la db con la cantidad de videos vistos igual a 0
        dbRef.child("/").update({
          cantidad: 0,
        });
        window.location.reload();
      }
    });

    //Se va a usar el efecto cada vez que se actualicen estos array
  }, [videosVistos, props]);

  //Funcion para cargar los videos vistos en la db al hacer click en el input
  const handleClick = (e) => {
    //Referencia a la base de datos del usuario
    const dbRef = app.database().ref("videosVistos/" + userId);

    const defineCheck = e.target.hasAttribute("checked");

    //Si el atributo no esta con tilde...
    if (defineCheck == false) {
      //Sumo a la cantidad de videos vistos en la db
      const check = videosVistos + 1;

      dbRef.child("/").update({
        cantidad: check,
      });

      //Si el atributo ya estaba checkeado
    } else {
      //Disminuyo en uno la cantidad de video vistos
      const check = videosVistos - 1;
      console.log(check);
      dbRef.child("/").update({
        cantidad: check,
      });
    }
  };

  return (
    <div className="lista-videos bg-light">
      <div className="botonera-lista">
        <p className="my-0 ms-3 py-2 fw-bold text-center text-dark">
          Lista de videos
        </p>
      </div>
      <ListGroup className="text-dark">
        <ListGroup.Item className=" d-flex align-items-center justify-content-between text-details bg-secondary curso-item">
          <label>Video numero 1</label>
          <input
            type="checkbox"
            id="cb-1"
            className="video-check"
            onClick={handleClick}
          />{" "}
        </ListGroup.Item>
        <ListGroup.Item className=" d-flex align-items-center justify-content-between text-details bg-secondary curso-item">
          <label>Video numero 1</label>
          <input
            type="checkbox"
            id="cb-1"
            className="video-check"
            onClick={handleClick}
          />{" "}
        </ListGroup.Item>
        <ListGroup.Item className=" d-flex align-items-center justify-content-between text-details bg-secondary curso-item">
          <label>Video numero 1</label>
          <input
            type="checkbox"
            id="cb-1"
            className="video-check"
            onClick={handleClick}
          />{" "}
        </ListGroup.Item>
        <ListGroup.Item className=" d-flex align-items-center justify-content-between text-details bg-secondary curso-item">
          <label>Video numero 1</label>
          <input
            type="checkbox"
            id="cb-1"
            className="video-check"
            onClick={handleClick}
          />{" "}
        </ListGroup.Item>
        <ListGroup.Item className=" d-flex align-items-center justify-content-between text-details bg-secondary curso-item">
          <label>Video numero 1</label>
          <input
            type="checkbox"
            id="cb-1"
            className="video-check"
            onClick={handleClick}
          />{" "}
        </ListGroup.Item>
        <ListGroup.Item className=" d-flex align-items-center justify-content-between text-details bg-secondary curso-item">
          <label>Video numero 1</label>
          <input
            type="checkbox"
            id="cb-1"
            className="video-check"
            onClick={handleClick}
          />{" "}
        </ListGroup.Item>
        <ListGroup.Item className=" d-flex align-items-center justify-content-between text-details bg-secondary curso-item">
          <label>Video numero 1</label>
          <input
            type="checkbox"
            id="cb-1"
            className="video-check"
            onClick={handleClick}
          />{" "}
        </ListGroup.Item>
        <ListGroup.Item className=" d-flex align-items-center justify-content-between text-details bg-secondary curso-item">
          <label>Video numero 1</label>
          <input
            type="checkbox"
            id="cb-1"
            className="video-check"
            onClick={handleClick}
          />{" "}
        </ListGroup.Item>
        <ListGroup.Item className=" d-flex align-items-center justify-content-between text-details bg-secondary curso-item">
          <label>Video numero 1</label>
          <input
            type="checkbox"
            id="cb-1"
            className="video-check"
            onClick={handleClick}
          />{" "}
        </ListGroup.Item>
        <ListGroup.Item className=" d-flex align-items-center justify-content-between text-details bg-secondary curso-item">
          <label>Video numero 1</label>
          <input
            type="checkbox"
            id="cb-1"
            className="video-check"
            onClick={handleClick}
          />{" "}
        </ListGroup.Item>
        <ListGroup.Item className=" d-flex align-items-center justify-content-between text-details bg-secondary curso-item">
          <label>Video numero 1</label>
          <input
            type="checkbox"
            id="cb-1"
            className="video-check"
            onClick={handleClick}
          />{" "}
        </ListGroup.Item>
        <ListGroup.Item className=" d-flex align-items-center justify-content-between text-details bg-secondary curso-item">
          <label>Video numero 1</label>
          <input
            type="checkbox"
            id="cb-1"
            className="video-check"
            onClick={handleClick}
          />{" "}
        </ListGroup.Item>
        <ListGroup.Item className=" d-flex align-items-center justify-content-between text-details bg-secondary curso-item">
          <label>Video numero 1</label>
          <input
            type="checkbox"
            id="cb-1"
            className="video-check"
            onClick={handleClick}
          />{" "}
        </ListGroup.Item>
        <ListGroup.Item className=" d-flex align-items-center justify-content-between text-details bg-secondary curso-item">
          <label>Video numero 1</label>
          <input
            type="checkbox"
            id="cb-1"
            className="video-check"
            onClick={handleClick}
          />{" "}
        </ListGroup.Item>
        <ListGroup.Item className=" d-flex align-items-center justify-content-between text-details bg-secondary curso-item">
          <label>Video numero 1</label>
          <input
            type="checkbox"
            id="cb-1"
            className="video-check"
            onClick={handleClick}
          />{" "}
        </ListGroup.Item>
        <ListGroup.Item className=" d-flex align-items-center justify-content-between text-details bg-secondary curso-item">
          <label>Video numero 1</label>
          <input
            type="checkbox"
            id="cb-1"
            className="video-check"
            onClick={handleClick}
          />{" "}
        </ListGroup.Item>
        <ListGroup.Item className=" d-flex align-items-center justify-content-between text-details bg-secondary curso-item">
          <label>Video numero 1</label>
          <input
            type="checkbox"
            id="cb-1"
            className="video-check"
            onClick={handleClick}
          />{" "}
        </ListGroup.Item>
        <ListGroup.Item className=" d-flex align-items-center justify-content-between text-details bg-secondary curso-item">
          <label>Video numero 1</label>
          <input
            type="checkbox"
            id="cb-1"
            className="video-check"
            onClick={handleClick}
          />{" "}
        </ListGroup.Item>
        <ListGroup.Item className=" d-flex align-items-center justify-content-between text-details bg-secondary curso-item">
          <label>Video numero 1</label>
          <input
            type="checkbox"
            id="cb-1"
            className="video-check"
            onClick={handleClick}
          />{" "}
        </ListGroup.Item>
        <ListGroup.Item className=" d-flex align-items-center justify-content-between text-details bg-secondary curso-item">
          <label>Video numero 1</label>
          <input
            type="checkbox"
            id="cb-1"
            className="video-check"
            onClick={handleClick}
          />{" "}
        </ListGroup.Item>
        <ListGroup.Item className=" d-flex align-items-center justify-content-between text-details bg-secondary curso-item">
          <label>Video numero 1</label>
          <input
            type="checkbox"
            id="cb-1"
            className="video-check"
            onClick={handleClick}
          />{" "}
        </ListGroup.Item>
        <ListGroup.Item className=" d-flex align-items-center justify-content-between text-details bg-secondary curso-item">
          <label>Video numero 1</label>
          <input
            type="checkbox"
            id="cb-1"
            className="video-check"
            onClick={handleClick}
          />{" "}
        </ListGroup.Item>
        <ListGroup.Item className=" d-flex align-items-center justify-content-between text-details bg-secondary curso-item">
          <label>Video numero 1</label>
          <input
            type="checkbox"
            id="cb-1"
            className="video-check"
            onClick={handleClick}
          />{" "}
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default ListaVideos;
