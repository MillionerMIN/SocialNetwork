import React from "react";

//import css
import c from '../Container.module.css';
import s from './Music.module.css';

function Music() {
    return (
        <div className={c.container} >
            <div className={s.music}>
                Music
            </div>
        </div>
    );
}

export default Music;