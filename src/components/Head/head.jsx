import React from "react";
import head from "../Head.png";
import style from "../Head/head.module.css"

const Head = () => {

    return(
    <div className={style.back}>
        <div className={style.divhead}>
            <img className={style.image} src={head}></img>
        </div>
    </div>
    )
}

export default Head;