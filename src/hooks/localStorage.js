export const getListCarrito = () => {
  if (!localStorage["@carrito"]) {
    localStorage["@carrito"] = JSON.stringify([]);
  }
  let carrito = JSON.parse(localStorage["@carrito"]);
  return carrito;
};

export const addItemCarrito = (item) => {
  const carrito = getListCarrito();
  carrito.push({ ...item });
  localStorage["@carrito"] = JSON.stringify(carrito);
};

export const deleteItemCarrito = (id) => {
  let carrito = getListCarrito();
  carrito = carrito.filter((item) => item.id !== id);
  localStorage["@carrito"] = JSON.stringify(carrito);
};

export const deleteAllCarrito = () => {
  localStorage["@carrito"] = JSON.stringify([]);
};
