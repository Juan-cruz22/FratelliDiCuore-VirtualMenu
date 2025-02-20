import React from 'react';
import style from'./pizzaCard.module.less';

const PizzaCard = ({ name, ingredients, price, detail, photo }) => {
  return (
    <div className={style.containerCard}>
      <button className={style.BotonCarrito}>Agregar a mi pedido por ${price}</button>
      <div className={style.content}>
        <img src={photo} alt={name} className={style.photo} />
        <div className={style.textContainer}>
          <h3>{name}</h3>
          {Array.isArray(ingredients) ? (
            ingredients.map((ingredient, index) => (
              <p key={index} className="ingredients">{ingredient}</p>
            ))
          ) : (
            <p className="ingredients">{ingredients}</p>
          )}
          <p className={style.detail}>{detail}</p>
        </div>
      </div>
    </div>
  );
};

export default PizzaCard;