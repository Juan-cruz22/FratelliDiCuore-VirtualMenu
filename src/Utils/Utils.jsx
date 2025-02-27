export const calcularPrecioTotal = (pizza, selectedExtras, precioExtra = 2500) => {
    const pizzaPrice = Number(pizza.price);
    const extrasPrice = selectedExtras.length * precioExtra;
    const totalPrice = pizzaPrice + extrasPrice;
    return totalPrice;
  };
  