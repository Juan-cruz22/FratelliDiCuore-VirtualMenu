import React from "react";
import { useNavigate } from "react-router-dom"; // Importamos useNavigate
import style from "./buttonCarrito.module.css";

const ButtonCarrito = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/Detail");
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