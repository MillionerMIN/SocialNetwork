import React from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { AuthType, loginTC, loginoutTC } from '../../../redux/auth-reducer';
import Account from "./Account/Account";
import s from './Login.module.scss';
import c from '../../Container.module.scss'
import { FormError, Input, createField } from '../FormControls/FormControls';
import { required } from '../../../utils/validation/validation';
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { AppStateType } from "../../../redux/redux-store";

type LoginPropsType = {
   isAuth: boolean
   auth: AuthType
   loginTC: (email: string, password: string, rememberMe: boolean) => void
}

type FormDataType = {
   email: string
   password: string
   rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
   const { error, handleSubmit } = props
   return (
      <form onSubmit={handleSubmit}>
         {createField('email', 'Email', Input, [required])}
         {createField('password', 'Password', Input, [required], { type: 'password' })}
         {createField('rememberMe', null, Input, [], { type: 'checkbox' }, 'rememberMe')}
         <div>
            <label htmlFor='rememberMe'>rememberMe</label>
         </div>
         
         {error ? <div className={s.error}>
            <Field name='error' component={FormError} />{error}
         </div> : ''}
         <button>LOGIN</button>
      </form>
   )
}

const LoginReduxForm = reduxForm<FormDataType>({
   // a unique name for the form
   form: 'login'
})(LoginForm)

const Login = (props: LoginPropsType) => {
   const { isAuth, loginTC } = props
   const { email, login } = props.auth

   const submit = (formData: FormDataType) => {
      const { email, password, rememberMe } = formData
      loginTC(email, password, rememberMe);
   }

   if (isAuth) {
      return <Redirect to={'/profile'} />
   }

   return (<div className={c.container}>
      {isAuth ? <Account email={email} login={login} /> :
         <div className={s.loginBlock}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={submit} />
         </div>
      }
   </div>);
}

const mapStateToProps = (state: AppStateType) => ({
   isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { loginTC, loginoutTC })(Login)