import React from 'react';
import style from './pizzaCard.module.less';

const PizzaCard = ({ name, ingredients, price, detail, photo }) => {

  return (
    <div className={style.conteiner}>
      <img className={style.image} src={photo} alt="Pizza" />
      <div className={style.textContainer}>
        <p className={style.name}>{name}</p>
        <p className={style.ingredients}>
        {Array.isArray(ingredients) ? (
            ingredients.map((ingredient, index) => (
              <p key={index}>{ingredient}</p>
            ))
          ) : (
            <p className="ingredients">{ingredients}</p>
          )}

        </p>
        <div className={style.divBottonPrice}>
          <button className={style.button}>Agregar al carrito</button>
          <div className={style.price}>${price}</div>
        </div>
      </div>
    </div>
  );
};

export default PizzaCard;
