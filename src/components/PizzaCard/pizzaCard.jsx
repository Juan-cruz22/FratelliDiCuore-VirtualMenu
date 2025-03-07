import React from 'react';
import style from './pizzaCard.module.less';
import { useNavigate } from 'react-router-dom';

const PizzaCard = ({ name, ingredients, price, photo }) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/Detail/${name}`);
  }

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
          <button className={style.button} onClick={handleClick}>Agregar al carrito</button>
          <div className={style.price}>${price}</div>
        </div>
      </div>
    </div>
  );
};

export default PizzaCard;