export const initialCarrito = {
  productos: [],
};

export const actionTypes = {
  AGREGAR_AL_CARRITO: "AGREGAR_AL_CARRITO",
  QUITAR_DEL_CARRITO: "QUITAR_DEL_CARRITO",
};

const reducer = (state, action) => {
  console.log(initialCarrito);
  switch (action.type) {
    case "AGREGAR_AL_CARRITO":
      return {
        ...state,
        productos: [...state.productos, action.infoProducto],
      };

    default:
      return console.log(state);
  }
};
console.log(initialCarrito);
export default reducer;
