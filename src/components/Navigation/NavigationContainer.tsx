import React from "react";
import { connect } from "react-redux";
import { AuthType, getAuthUserDataTC, loginoutTC } from '../../redux/auth-reducer';
import { AppStateType } from "../../redux/redux-store";
import Navigation from './Navigation';

type NavigationContainerPropsType = {
   getAuthUserDataTC: (
      id: null | number,
      email: null | string,
      login: null | string) => void
   loginoutTC: () => void
}

class NavigationContainer extends React.Component<NavigationContainerPropsType & mapStateToPropsType>{
   componentDidMount() {
      this.props.getAuthUserDataTC(this.props.auth.id, this.props.auth.email, this.props.auth.email)
   }
   render() {
      return <Navigation {...this.props} />
   }
}

type mapStateToPropsType = {
   auth: AuthType
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
   return {
      auth: state.auth
   }
}

export default connect(mapStateToProps, { getAuthUserDataTC, loginoutTC })(NavigationContainer)
