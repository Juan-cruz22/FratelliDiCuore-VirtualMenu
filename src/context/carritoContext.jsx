import React, { createContext, useState, useContext } from 'react';

const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarPizzaAlCarrito = (pizza) => {
    setCarrito((prevCarrito) => [...prevCarrito, pizza]);
  };

  return (
    <CarritoContext.Provider value={{ carrito, agregarPizzaAlCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
};

export const useCarrito = () => {
  return useContext(CarritoContext);
};

