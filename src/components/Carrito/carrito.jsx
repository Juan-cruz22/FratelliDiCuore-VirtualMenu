import React from "react";
import { useLocation } from "react-router-dom";
import style from "./carrito.module.less";
import header from "../headCarrito.png";
import { useCarrito } from "../../context/carritoContext";
import { calcularPrecioTotal } from "../../Utils/Utils";

const Carrito = () => {
  const location = useLocation();
  const { carrito, eliminarPizzaDelCarrito } = useCarrito();

  const precioExtra = 2500;

  React.useEffect(() => {
    if (location.pathname === "/Carrito") {
      document.body.style.backgroundColor = "blue";
    }

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [location.pathname]);

  const handleEliminarPizza = (index) => {
    eliminarPizzaDelCarrito(index);
  };

  const calcularTotal = () => {
    let total = 0;

    carrito.forEach((pizza) => {
      total += calcularPrecioTotal(pizza, pizza.extras, precioExtra); // Usamos calcularPrecioTotal aquí
    });

    return total;
  };

  return (
    <div>
      <img className={style.imgHead} src={header} alt="Header Carrito" />
      <div className={style.pedido}>
        <h1 className={style.titulo}>Mi Pedido</h1>
        <div>
          {carrito.length === 0 ? (
            <p>No has agregado ninguna pizza al carrito.</p>
          ) : (
            <div>
              {carrito.map((pizza, index) => (
                <div key={index} className={style.pizzaItem}>
                  <p>{pizza.name}</p>
                  <p>${pizza.price}</p>
                  {/* Mostrar los extras seleccionados */}
                  {pizza.extras && pizza.extras.length > 0 && (
                    <div>
                      <p>Extras:</p>
                      <ul>
                        {pizza.extras.map((extra, index) => (
                          <li key={index}>{extra}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {/* Botón para eliminar la pizza */}
                  <button
                    className={style.buttonEliminar}
                    onClick={() => handleEliminarPizza(index)}
                  >
                    Eliminar
                  </button>
                </div>
              ))}
            </div>
          )}
          <div>
            <p><strong>Total:</strong> ${calcularTotal()}</p>
          </div>
        </div>
        <div className={style.buttonCompletar}>
          <button className={style.buttonRealizar}>Realizar pedido</button>
        </div>
      </div>
    </div>
  );
};

export default Carrito;
