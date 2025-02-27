import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import style from "./detail.module.less";
import pizzaData from "../../Data";

const Detail = () => {

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(`/`);
  }

  const { name } = useParams();
  const pizza = pizzaData.find(pizza => pizza.name === name);
  if (!pizza) {
    return <div>Pizza no encontrada</div>; 
  }

  return (
    <div>
      <div className={style.photoContainer}>
        <img className={style.photograp} src={pizza.photo} alt={pizza.name} />
        <button className={style.buttonRetroceso} onClick={handleBackClick}>Volver</button>
      </div>
      <h1 className={style.nombre}>{pizza.name}</h1>
      <p className={style.detalle}>{pizza.detail}</p>
      <div className={style.contPrice}>
        <p className={style.precio}>${pizza.price}</p>
        <p className={style.extras}>EXTRAS ($2.500)</p>
        <button className={style.buttonAlb}>Pesto de Albahaca</button>
        <button className={style.buttonDia}>Salsa Diavola</button>
        <div>
          <button className={style.buttonBR}>Borde relleno</button>
        </div>
        <button className={style.buttonPedido} onClick={handleBackClick}>Agregar a mi pedido (${pizza.price})</button>
      </div> 
    </div>
  );
}

export default Detail;