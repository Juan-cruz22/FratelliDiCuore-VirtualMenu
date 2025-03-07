import React, { useState } from "react";
import style from "../metodos/metodos.module.less";

const Metodos = ({ setMetodoEntrega, setMetodoPago, setDatosEntrega }) => {
  const precioDelivery = 1700;

  const [isTakeAwaySelected, setIsTakeAwaySelected] = useState(false);
  const [isDeliverySelected, setIsDeliverySelected] = useState(false);

  const [deliveryFueraSelected, setDeliveryFueraSelected] = useState(false);
  const [deliveryDentroSelected, setDeliveryDentroSelected] = useState(false);

  const handleTakeAwayClick = () => {
    setIsTakeAwaySelected(true);
    setIsDeliverySelected(false);
    setMetodoEntrega('Take Away');
  };

  const handleDeliveryClick = () => {
    setIsDeliverySelected(true);
    setIsTakeAwaySelected(false);
    setMetodoEntrega('Delivery');
  };

  const handleDeliveryDentro = () => {
    setDeliveryDentroSelected(true);
    setDeliveryFueraSelected(false);
  };

  const handleDeliveryFuera = () => {
    setDeliveryFueraSelected(true);
    setDeliveryDentroSelected(false);
  }

  const handleDatosEntrega = (e) => {
    setDatosEntrega(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  }

  return (
    <div>
      <h3>Elige tu metodo de entrega</h3>
      <button className={style.delivery} onClick={handleDeliveryClick}>Delivery</button>
      <button className={style.takeAway} onClick={handleTakeAwayClick}>Take away</button>
      <h3>Metodo de pago</h3>
      <button className={style.efectivo} onClick={() => setMetodoPago('Efectivo')}>Efectivo</button>
      <button className={style.transferencia} onClick={() => setMetodoPago('Transferencia')}>Transferencia</button>

      {isTakeAwaySelected && (
        <div className={style.takeAwayMessage}>
          <h2 className={style.tituloDyT}>Take away</h2>
          <p className={style.direccion}>Nos encontramos en calle 62 n780, entre calle 10 y 11.</p>
          <p className={style.direccion}>La Plata, Buenos Aires</p>
        </div>)}

      {isDeliverySelected && (
        <div className={style.deliveryMessage}>
          <h2 className={style.tituloDyT}>Delivery</h2>
          <div className={style.buttonsHandleDYF}>
            <button className={style.enElCasco} onClick={handleDeliveryDentro}>En el casco urbano</button>
            <button className={style.fueraDelCasco} onClick={handleDeliveryFuera}>Fuera del casco urbano</button>
          </div>
          {deliveryDentroSelected && (
            <div className={style.deliverydentro}>
              <h4>El valor del delivery es de ${precioDelivery}</h4>
              <input type="text" name="calle" onChange={handleDatosEntrega} placeholder="Calle" />
              <input type="text" name="numero" onChange={handleDatosEntrega} placeholder="Numero" />
              <input type="text" name="entreCalles" onChange={handleDatosEntrega} placeholder="Entre calles" />
              <input type="text" name="nombre" onChange={handleDatosEntrega} placeholder="Tu nombre" />
              <input type="phone" name="telefono" onChange={handleDatosEntrega} placeholder="Telefono" />
            </div>)}

          {deliveryFueraSelected && (
            <div className={style.deliveryFuera}>
              <h4>Completa los datos y presiona el botón para recibir el valor del delivery por WhatsApp.</h4>
              <input className={style.calle} name="calle" onChange={handleDatosEntrega} placeholder="Calle" />
              <input className={style.numero} name="numero" onChange={handleDatosEntrega} placeholder="Numero" />
              <input className={style.eCalles} name="entreCalles" onChange={handleDatosEntrega} placeholder="Entre calles" />
              <input name="nombre" onChange={handleDatosEntrega} placeholder="Tu nombre" />
              <input type="phone" name="telefono" onChange={handleDatosEntrega} placeholder="Telefono" />
              <button className={style.irAWhatsapp}>Enviar al Whatsapp</button>
            </div>)}
        </div>)}
    </div>
  );
};



export default Metodos;
