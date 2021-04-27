import React from 'react';

//import css
import c from '../Container.module.css';
import s from './Other.module.css';

function Other() {
    return (
        <div className={c.container} >
            <div className={s.other}>
                Other
            </div>
        </div>
    );
}

export default Other;