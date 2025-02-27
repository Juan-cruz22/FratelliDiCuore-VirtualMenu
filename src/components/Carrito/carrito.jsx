import React, { useEffect } from "react";
import { useLocation } from "react-router-dom"; // Importa useLocation
import style from "./carrito.module.less";
import header from "../headCarrito.png";

const Carrito = () => {
  const location = useLocation(); // Obtén la ubicación actual

  // Cambiar el color de fondo cuando la ruta es "/carrito"
  useEffect(() => {
    if (location.pathname === "/Carrito") {
      document.body.style.backgroundColor = "blue"; // Cambia el color del fondo del body
    }

    // Limpiar el estilo cuando el componente se desmonte o cambie la ruta
    return () => {
      document.body.style.backgroundColor = ""; // Vuelve al color original
    };
  }, [location.pathname]); // Ejecuta el efecto cada vez que la ruta cambia

  return (
    <div>
      <img className={style.imgHead} src={header} alt="Header Carrito" />
        <div className={style.pedido}>
            <h1 className={style.titulo}>
              mi pedido
            </h1>
            <div className={style.buttonCompletar}>
                <button className={style.buttonRealizar}>Realizar pedido</button>
            </div>
        </div>
    </div>
  );
};

export default Carrito;