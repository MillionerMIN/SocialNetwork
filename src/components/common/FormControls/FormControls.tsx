import React from "react";
import { Field } from "redux-form";
import s from './FormControls.module.scss'

const FormControls = (props: any) => {
   const { meta:{error, touched}, children } = props;
   const hasError = error && touched
   return (
      <div className={hasError ? s.error : ''}>
         {children}
         {hasError && <span>{error}</span>}
      </div>
   );
}

export const Textarea = (props: any) => {
   const { input, ...restProps } = props;
   return <FormControls {...props}><textarea {...input} {...restProps} /></FormControls>
}

export const Input = (props: any) => {
   const { input, meta, ...restProps } = props;
   return <FormControls {...props}><input {...input} {...restProps} /></FormControls>
}

export const FormError = (props: any) => {
   return <FormControls {...props}><div {...props}>{props.error}</div></FormControls>
}

export const createField = (name: string, placeholder: string | null, component = {}, validate: {}, props?: any, text='') => {
   return <Field
      name={name}
      placeholder={placeholder}
      component={component}
      validate={validate}
      {...props}
      {...text}
   />
}