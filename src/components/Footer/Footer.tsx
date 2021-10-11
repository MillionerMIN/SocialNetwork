import React from 'react';
import s from './Footer.module.scss';
import logo from './footer_logo.png';
export const Footer = () => {
  return (
    <div className={s.footer}>
      <div className={s.wrapper}>
        <img src={logo} alt="logo" />
        <div className={s.navigation}>
          <h5>Navigation</h5>
          
        </div>
        <div className={s.access}>
          <h5>Fast access</h5>
        </div>
        <div className={s.language}>
          <h5>Language</h5>
        </div>
      </div>
    </div>
  );
};
