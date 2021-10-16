console.log("Hola");

// SDK de Mercado Pago
const mercadopago = require("mercadopago");
// Agrega credenciales
mercadopago.configure({
  access_token:
    "APP_USR-2207575592258010-100323-27f423294df71f3bc95b24cbd3d096cd-36377523",
});

// Crea un objeto de preferencia
let preference = {
  items: [
    {
      title: "Mi producto",
      unit_price: 100,
      quantity: 1,
    },
  ],
};

mercadopago.preferences
  .create(preference)
  .then(function (response) {
    // Este valor reemplazará el string "<%= global.id %>" en tu HTML
    global.id = response.body.id;
  })
  .catch(function (error) {
    console.log(error);
  });

const mp = new MercadoPago("APP_USR-ae92ff42-233d-4ddc-bc19-628232a717ec", {
  locale: "es-AR",
});

// Inicializa el checkout
mp.checkout({
  preference: {
    id: "2207575592258010",
  },
  render: {
    container: ".cho-container", // Indica el nombre de la clase donde se mostrará el botón de pago
    label: "Pagar", // Cambia el texto del botón de pago (opcional)
  },
});
