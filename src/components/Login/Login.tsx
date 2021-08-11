import React from "react";
import { NavLink } from "react-router-dom";
import { AuthType } from "../../redux/auth-reducer";
import Account from "../Account/Account";
import s from './Login.module.scss';

type LoginPropsType = {
   auth: AuthType
   setAuthUserData: (
      id: null | number,
      email: null | string,
      login: null | string) => void
}

const Login = ({...props }: LoginPropsType) => {
   return (<>
      {props.auth.isAuth ?  <Account email={props.auth.email} login={props.auth.login} />: 
         <div className={s.loginBlock}>
            <NavLink to={'/login'}>
               LOGIN
            </NavLink>
         </div>
      }
</>
   );
}

export {
   Login
}