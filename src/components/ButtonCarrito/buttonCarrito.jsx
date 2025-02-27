import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./buttonCarrito.module.css";

const ButtonCarrito = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/Carrito");
    };

    return (
        <div className={style.buttonContainer}>
            <button className={style.buttonCarrito} onClick={handleClick}>
                Ver mi pedido
            </button>
        </div>
    );
}

export default ButtonCarrito;