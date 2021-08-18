import React, { Component } from "react";
import { Redirect } from "react-router";
import { AppStateType } from "../redux/redux-store";
import { connect } from 'react-redux';


// interface AwaysCoolStateProps {
//    isAuth: boolean;
// }
const mapStateToPropsForRiderect = (state: AppStateType) => {
   return {
      isAuth: state.auth.isAuth
   }
}

export const withAuthRedirect = (ChildComp: React.ComponentType<any | string>) => {

   class RedirectComponent extends Component {
      render() {
         //@ts-ignore
         if (!this.props.isAuth) return <Redirect to='/login' />;
         return <ChildComp {...this.props} />
      }
   }
   let ConnectedRedirectComponent = connect(mapStateToPropsForRiderect)(RedirectComponent)
   return ConnectedRedirectComponent;
}
   



