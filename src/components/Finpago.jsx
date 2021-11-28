import React, { useEffect, useState } from "react";
import { app } from "../firebase";
import { getDatabase, ref, set, get } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function Finpago() {
  //Identifico al usuario que compró el curso
  const auth = getAuth();
  const [user, setUser] = useState();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user.uid);
      }
    });
  }, []);

  //Recibo el ID del pago para obtener los datos
  const path = window.location.href;
  const pathSplit = path.split("&");
  const paymentId = pathSplit[2].slice(11);
  const url = `https://api.mercadopago.com/v1/payments/${paymentId}?access_token=APP_USR-2207575592258010-100323-27f423294df71f3bc95b24cbd3d096cd-36377523`;

  const [cursoComprado, setCursoComprado] = useState();
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "approved") {
          //Obtengo el/los ids del curso que compró
          setCursoComprado(data.additional_info.items[0].id);
        } else {
          console.log("El pago no fué aprovado");
        }

        console.log(data);
      });
  }, []);

  //Entro a la base de datos de cursos comprados para ese usuario
  const db = getDatabase();
  const dbRef = ref(db, "permisosUser/" + user);
  //Si existe algún curso comprado y un nombre de usuario
  if (cursoComprado !== "undefined" && user) {
    //Ver si ya tiene algún curso, agregar el nuevo que compró
    get(dbRef).then((snap) => {
      if (snap.exists()) {
        const cursosActuales = snap.val().cursoComprado;
        const cursosTotales = cursosActuales + "," + cursoComprado;
        set(dbRef, {
          cursosTotales,
        });

        //Si no tiene ningún curso agregar el que compró
      } else {
        set(dbRef, {
          cursoComprado,
        });
      }
    });
  }

  return (
    <div className="my-5 pt-5">
      {cursoComprado ? (
        <h1>
          El usuario {user} compró los cursos con id {cursoComprado}
        </h1>
      ) : (
        "El pago no fué aprovado"
      )}
    </div>
  );
}

export default Finpago;
