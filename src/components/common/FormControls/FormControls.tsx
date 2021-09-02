import React from "react";
import s from './FormControls.module.scss'

const FormControls = (props: any) => {
   const { meta } = props;
   const hasError = meta.error && meta.touched
   return (
      <div className={hasError ? s.error : ''}>
         {props.children}
         {hasError && <span>{meta.error}</span>}
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

