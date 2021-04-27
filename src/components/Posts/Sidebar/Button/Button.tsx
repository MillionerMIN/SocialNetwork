import React from "react";
import style from "./Button.module.css";


export function Button () {
    return <div className={style.buttonCon}>
        <button className={style.button}>write new article</button>
    </div>
}