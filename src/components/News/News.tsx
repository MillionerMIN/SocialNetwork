import React from 'react';

//import css
import c from '../Container.module.scss';
import s from './News.module.css';

function News() {
    return (
        <div className={c.container} >
            <div className={s.news}>
                News
            </div>
        </div>
    );
}

export default News;