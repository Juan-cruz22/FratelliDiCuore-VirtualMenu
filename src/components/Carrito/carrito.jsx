import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import style from "./carrito.module.less";
import header from "../headCarrito.png";
import { useCarrito } from "../../context/carritoContext";
import { calcularPrecioTotal } from "../../Utils/Utils";
import Metodos from "./metodos/metodos";

const Carrito = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { carrito, eliminarPizzaDelCarrito } = useCarrito();

  // Estado para los métodos de entrega y pago
  const [metodoEntrega, setMetodoEntrega] = useState("");
  const [metodoPago, setMetodoPago] = useState("");
  const [datosEntrega, setDatosEntrega] = useState({});

  const precioExtra = 2500;

  React.useEffect(() => {
    if (location.pathname === "/Carrito") {
      document.body.style.backgroundColor = "";
    }
  }, [location.pathname]);

  const handleEliminarPizza = (index) => {
    eliminarPizzaDelCarrito(index);
  };

  const calcularTotal = () => {
    let total = 0;
    carrito.forEach((pizza) => {
      total += calcularPrecioTotal(pizza, pizza.extras, precioExtra);
    });
    return total;
  };

  const handleRealizarPedido = () => {
    // Navegar a la página Outro pasando los datos necesarios
    navigate("/Outro", {
      state: {
        carrito,
        total: calcularTotal(),
        metodoEntrega,
        metodoPago,
        datosEntrega,
        precioExtra,
      },
    });
  };

  return (
    <div className={style.mainContainer}>
      <img className={style.imgHead} src={header} alt="Header Carrito" />
      <div className={style.pedido}>
        <h1 className={style.titulo}>Mi Pedido</h1>
        <div className={style.containerOutro}>
          {carrito.length === 0 ? (
            <p className={style.noAdd}>No has agregado ninguna pizza al carrito.</p>
          ) : (
            <div>
              {carrito.map((pizza, index) => (
                <div key={index} className={style.pizzaItem}>
                  <div className={style.nameandprice}>
                    <p className={style.addName}>{pizza.name}</p>
                    <p className={style.addPrice}>${pizza.price}</p>
                  </div>
                  {pizza.extras && pizza.extras.length > 0 ? (
                    <div className={style.contExtras}>
                      <p className={style.extra}>Extras:</p>
                      {pizza.extras.map((extra, index) => (
                        <p className={style.extras} key={index}>
                          {extra} ${precioExtra}
                        </p>
                      ))}
                    </div>
                  ) : (
                    <div className={style.contExtras}>
                      <p className={style.extra}>Sin extras seleccionados</p>
                    </div>
                  )}
                  <button className={style.buttonEliminar} onClick={() => handleEliminarPizza(index)}>
                    X
                  </button>
                </div>
              ))}
            </div>
          )}
          <div>
            <p className={style.total}>Total: ${calcularTotal()}</p>
          </div>
          <Metodos 
            setMetodoEntrega={setMetodoEntrega}
            setMetodoPago={setMetodoPago}
            setDatosEntrega={setDatosEntrega}
          />
        </div>
        <div className={style.buttonCompletar}>
          <button className={style.buttonRealizar} onClick={handleRealizarPedido}>
            Realizar pedido
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carrito;
