import React from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { AuthType } from "../../redux/auth-reducer";
import Account from "./Account/Account";
import s from './Login.module.scss';
import c from '../Container.module.scss'
import { Input } from "../common/FormControls/FormControls";
import { required } from '../../utils/validation/validation';

type LoginPropsType = {
   auth: AuthType
}

type FormDataType = {
   login: string
   password: string
   rememberMe: boolean
}

const Login = ({ ...props }: LoginPropsType) => {
   const submit = (formData: FormDataType) => {
      console.log(formData);
   }

   return (<div className={c.container}>
      {props.auth.isAuth ? <Account email={props.auth.email} login={props.auth.login} /> :
         <div className={s.loginBlock}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={submit} />
         </div>
      }
   </div>);
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field name="login"
               placeholder="Login"
               component={Input}
               validate={[required]} />
         </div>
         <div>
            <Field name="password"
               placeholder="Password"
               component={Input}
               validate={[required]} />
         </div>
         <div>
            <Field name="rememberMe" component={Input} type="checkbox" /> remember me
         </div>
         <button>LOGIN</button>
      </form>
   )
}

const LoginReduxForm = reduxForm<FormDataType>({
   // a unique name for the form
   form: 'login'
})(LoginForm)

export {
   Login
}