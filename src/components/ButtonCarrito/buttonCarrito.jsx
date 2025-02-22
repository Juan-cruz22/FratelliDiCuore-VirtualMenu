import React from "react";
import style from "./buttonCarrito.module.css"

const ButtonCarrito = () =>{
    return(
        <div className={style.buttonContainer}>
            <button className={style.buttonCarrito}>Ver mi pedido</button>
        </div>
    );
}

export default ButtonCarrito;