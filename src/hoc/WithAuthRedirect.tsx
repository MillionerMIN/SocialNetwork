import React, {  ComponentType } from "react";
import { Redirect } from "react-router";
import { AppStateType } from "../redux/redux-store";
import { connect } from 'react-redux';


type MSTPType = {
   isAuth: boolean
}

const mapStateToPropsForRiderect = (state: AppStateType): MSTPType => {
   return {
      isAuth: state.auth.isAuth
   }
}

export function withAuthRedirect <T>(ChildComp: ComponentType<T>) {

   const RedirectComponent = (props: MSTPType)=> {
      const {isAuth, ...restProps} = props;
      if (!isAuth) return <Redirect to='/login' />;
      return <ChildComp {...restProps as T} />
   }
   let ConnectedRedirectComponent = connect(mapStateToPropsForRiderect)(RedirectComponent)
   return ConnectedRedirectComponent;
}
   



