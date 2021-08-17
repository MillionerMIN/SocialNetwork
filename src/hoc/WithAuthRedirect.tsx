import React, { Component } from "react";
import { Redirect } from "react-router";

interface AwaysCoolStateProps {
   isAuth: boolean;
}

export const withAuthRedirect = (ChildComp: React.ComponentType<any | string>)=> {

   return class RedirectComponent extends Component<{}, AwaysCoolStateProps> {
      render(){
         //@ts-ignore
         if (!this.props.isAuth) return <Redirect to='/login' />;
         return <ChildComp {...this.props} />
      }
   }
}

