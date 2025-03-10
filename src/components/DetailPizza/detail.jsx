import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import style from "./detail.module.less";
import pizzaData from "../../Data";
import { useCarrito } from "../../context/carritoContext";
import { calcularPrecioTotal } from "../../Utils/Utils";

const Detail = () => {
  const navigate = useNavigate();
  const { agregarPizzaAlCarrito } = useCarrito();

  const [selectedExtras, setSelectedExtras] = useState([]);
  const precioExtra = 2500;

  const handleBackClick = () => {
    navigate(`/`);
  };

  const handleAddToCart = (pizza) => {
    const pizzaConExtras = {
      ...pizza,
      extras: selectedExtras,
    };
    agregarPizzaAlCarrito(pizzaConExtras);
    navigate(`/`);
  };

  const handleExtraChange = (extra) => {
    setSelectedExtras((prevExtras) =>
      prevExtras.includes(extra)
        ? prevExtras.filter((item) => item !== extra)
        : [...prevExtras, extra]
    );
  };

  const { name } = useParams();
  const pizza = pizzaData.find((pizza) => pizza.name === name);
  if (!pizza) {
    return <div>Pizza no encontrada</div>;
  }

  return (
    <div>
      <div className={style.photoContainer}>
        <img className={style.photograp} src={pizza.photo} alt={pizza.name} />
        <button className={style.buttonRetroceso} onClick={handleBackClick}>
          Volver
        </button>
      </div>
      <h1 className={style.nombre}>{pizza.name}</h1>
      <p className={style.detalle}>{pizza.detail}</p>
      <div className={style.contPrice}>
        <p className={style.precio}>${pizza.price}</p>
        <p className={style.extras}>EXTRAS ($2.500 cada uno)</p>

        {/* Botones de extras */}
        <button
          className={`${style.buttonAlb} ${selectedExtras.includes("Pesto de Albahaca") ? style.selectedGreen : ""}`}
          onClick={() => handleExtraChange("Pesto de Albahaca")}
        >
          Pesto de Albahaca
        </button>
        <button
          className={`${style.buttonDia} ${selectedExtras.includes("Salsa Diavola") ? style.selectedRed : ""}`}
          onClick={() => handleExtraChange("Salsa Diavola")}
        >
          Salsa Diavola
        </button>
        <button
          className={`${style.buttonBR} ${selectedExtras.includes("Borde relleno") ? style.selectedOrange : ""}`}
          onClick={() => handleExtraChange("Borde relleno")}
        >
          Borde relleno
        </button>

        <button
          className={style.buttonPedido}
          onClick={() => handleAddToCart(pizza)}
        >
          Agregar a mi pedido (${calcularPrecioTotal(pizza, selectedExtras, precioExtra)})
        </button>
      </div>
    </div>
  );
};

export default Detail;
