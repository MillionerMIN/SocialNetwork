import React from 'react';

//import css
import c from '../Container.module.scss';
import s from './Setting.module.css';

function Setting() {
    return (
        <div className={c.container} >
            <div className={s.setting}>
                Setting
            </div>
        </div>
    );
}

export default Setting;