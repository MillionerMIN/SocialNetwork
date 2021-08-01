import React from "react";
import s from './Footer.module.scss'
import logo from './footer_logo.png'
export const Footer = () => {
   return <div className={s.footer}>
      <div className={s.wrapper}>
         <img src={logo} alt='logo' />
         <div className={s.navigation}>Navigation</div>
         <div className={s.access}>Fast access</div>
         <div className={s.language}>Language</div>
      </div>
   </div>
}