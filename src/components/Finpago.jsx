import React, { useEffect, useState } from "react";

function Finpago() {
  const path = window.location.href;
  const pathSplit = path.split("&");
  const paymentId = pathSplit[2].slice(11);
  const url = `https://api.mercadopago.com/v1/payments/${paymentId}?access_token=APP_USR-2207575592258010-100323-27f423294df71f3bc95b24cbd3d096cd-36377523`;

  const [userId, setUserId] = useState();
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setUserId(data.additional_info.items[0].id));
  }, []);

  return <div></div>;
}

export default Finpago;
