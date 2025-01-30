import React from 'react';
import PizzaCard from '../PizzaCard/pizzaCard';
import pizzaData from '../../Data';
import style from './pizzaCards.module.css'

const PizzaCards = () => {
  return (
    <div className={style.cardscontainer}>
      {pizzaData.map((pizza, index) => (
        <PizzaCard
          key={index}
          name={pizza.name}
          ingredients={pizza.ingredients}
          price={pizza.price}
          detail={pizza.detail}
          photo={pizza.photo}
          />
      ))}
    </div>
  );
};

export default PizzaCards;