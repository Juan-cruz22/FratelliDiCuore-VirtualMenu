import React from "react";
import { useLocation } from "react-router-dom";
import header from "../../components/HeadCarrito.png"
import style from "./outro.module.less"

const Outro = () => {
  const location = useLocation();
  const { carrito, total, metodoEntrega, metodoPago, datosEntrega, precioExtra } = location.state || {};

  const state = "Pendiente";

  return (
    <div className={style.conteinerBackground}>
      <img className={style.imgHeadOutro} src={header} alt="" />
        <div className={style.containerState}>
          <h1 className={style.tituloState}>ESTADO DE MI PEDIDO</h1>
          <div className={style.textState}>
            <h2 className={style.state}>{state}</h2>
          </div>
          <h2 className={style.descState}>Esperando aceptacion de la pizzeria...</h2>
        <div className={style.conteinerPizzas}>
        <p className={style.miPedido}>mi pedido</p>
        {carrito && carrito.map((pizza, index) => (
          <div className={style.pizzaDescription}>
            <p className={style.nameP}>{pizza.name}</p>
            {pizza.extras && pizza.extras.length > 0 ? (
              <p className={style.extrasJoin}> {pizza.extras.join(', ')}</p>
            ) : (
              <p className={style.extrasJoin}>Sin extras seleccionados</p>
            )}
          <p className={style.priceP}>${(Number(pizza.price) + pizza.extras.length*precioExtra)}</p>
        </div>
        ))}
        <div>
        </div>
      </div>


      <h3>Metodo de entrega: {metodoEntrega}</h3>
      <h3>Metodo de pago: {metodoPago}</h3>
      {metodoEntrega === 'Delivery' && (
        <div>
          <h4>Datos de entrega:</h4>
          <p>Calle: {datosEntrega.calle}</p>
          <p>Numero: {datosEntrega.numero}</p>
          <p>Entre calles: {datosEntrega.entreCalles}</p>
          <p>Nombre: {datosEntrega.nombre}</p>
          <p>Telefono: {datosEntrega.telefono}</p>
        </div>
      )}
      </div>
    </div>
  );
};

export default Outro;
