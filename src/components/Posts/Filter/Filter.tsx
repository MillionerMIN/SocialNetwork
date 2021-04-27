import style from "./Filter.module.scss";
import React from "react";

export function Filter() {
    return <div className={style.filter}>
        <div>Sort by: <span>trending</span></div>
    </div>
}

