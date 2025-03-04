import React, { useState } from "react";
import style from "../metodos/metodos.module.less";

const Metodos = () => {

  const precioDelivery = 1700;

  const [isTakeAwaySelected, setIsTakeAwaySelected] = useState(false);
  const [isDeliverySelected, setIsDeliverySelected] = useState(false);

  const [deliveryFueraSelected, setDeliveryFueraSelected] = useState(false);
  const [deliveryDentroSelected, setDeliveryDentroSelected] = useState(false);

  const handleTakeAwayClick = () => {
    setIsTakeAwaySelected(true);
    setIsDeliverySelected(false);
  };

  const handleDeliveryClick = () => {
    setIsDeliverySelected(true);
    setIsTakeAwaySelected(false);
  };

  const handleDeliveryDentro = () => {
    setDeliveryDentroSelected(true);
    setDeliveryFueraSelected(false);
  };

  const handleDeliveryFuera = () => {
    setDeliveryFueraSelected(true);
    setDeliveryDentroSelected(false);
  }

  return (
    <div>
          <h3>Elige tu metodo de entrega</h3>
              <button className={style.delivery} onClick={handleDeliveryClick}>Delivery</button>
              <button className={style.takeAway} onClick={handleTakeAwayClick}>Take away</button>
          <h3>Metodo de pago</h3>
              <button className={style.efectivo}>Efectivo</button>
              <button className={style.transferencia}>Transferencia</button>

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
                    <button className={style.enElCasco} onClick={handleDeliveryDentro}>En el casco urbano: de 1 a 31 - de 32 a 72</button>
                    <button className={style.fueraDelCasco} onClick={handleDeliveryFuera}>Fuera del casco urbano: Los Hornos, Tolosa, San Carlos, Villa Elvira, etc...</button>
                  </div>
                      {deliveryDentroSelected && (
                        <div className={style.deliverydentro}>
                          <h4>El valor del delivery es de ${precioDelivery}</h4>
                          <input type="text" placeholder="Calle"></input>
                          <input type="text" placeholder="Numero"></input>
                          <input type="text" placeholder="Entre calles"></input>
                          <input type="text" placeholder="Tu nombre"></input>
                          <input type="phone" placeholder="Telefono"></input>
                        </div>)}

                      {deliveryFueraSelected && (
                        <div className={style.deliveryFuera}>
                          <h4>Completa los datos y presiona el botón para recibir el valor del delivery por WhatsApp.</h4>
                          <input className={style.calle} type="text" placeholder="Calle"></input>
                          <input className={style.numero} type="text" placeholder="Numero"></input>
                          <input className={style.eCalles}type="text" placeholder="Entre calles"></input>
                          <input type="text" placeholder="Tu nombre"></input>
                          <input type="phone" placeholder="Telefono"></input>
                            <button className={style.irAWhatsapp}> Enviar al Whatsapp</button>
                            <p>valor consultado</p>
                          <input type="text" placeholder="Precio delivery"></input>
                        </div>)}
                </div>)}
      </div>
  );
};

export default Metodos;
