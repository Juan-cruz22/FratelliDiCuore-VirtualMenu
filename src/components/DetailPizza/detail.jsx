import React from "react";
import { useParams } from "react-router-dom";
import style from "./detail.module.less";

import pizzaData from "../../Data";

const Detail = () => {
  const { name } = useParams();

  const pizza = pizzaData.find(pizza => pizza.name === name);

  if (!pizza) {
    return <div>Pizza no encontrada</div>; 
  }

  return (
    <div>
    <img className={style.photograp} src={pizza.photo} alt={pizza.name} />
      <h1 className={style.nombre}>{pizza.name}</h1>
      <p className={style.detalle}>{pizza.detail}</p>
      <div className={style.contPrice}>
      <p className={style.precio}>${pizza.price}</p>
        <p className={style.extras}>EXTRAS ($2.500)</p>
            <button className={style.buttonAlb}>Pesto de Albahaca</button>
            <button className={style.buttonDia}>Salsa Diavola</button>
          <div>
            <button className={style.buttonBR}>Borde relleno</button>
          <div> 
          <button className={style.buttonPedido}>Agregar a mi pedido (${pizza.price})</button>
          </div> 
          </div>
      </div>
    </div>
  );
}

export default Detail;