import React from "react";
import Head from "../Head.png";
import style from "../Head/head.module.css"

const head = () => {
    return(
        <div className={style.divhead}>
            <img className={style.image} src={Head}></img>
        </div>
    )
}

export default head;