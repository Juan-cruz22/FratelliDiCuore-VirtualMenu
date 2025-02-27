import React, { createContext, useContext, useState } from "react";

const CarritoContext = createContext();

export const useCarrito = () => {
  return useContext(CarritoContext);
};

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  // Función para agregar pizza al carrito
  const agregarPizzaAlCarrito = (pizza) => {
    setCarrito([...carrito, pizza]);
  };

  // Función para eliminar pizza del carrito
  const eliminarPizzaDelCarrito = (index) => {
    const nuevasPizzas = carrito.filter((_, i) => i !== index);
    setCarrito(nuevasPizzas);
  };

  return (
    <CarritoContext.Provider value={{ carrito, agregarPizzaAlCarrito, eliminarPizzaDelCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
};
