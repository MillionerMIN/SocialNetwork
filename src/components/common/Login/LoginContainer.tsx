import React from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import { getAuthUserDataTC, AuthType } from '../../../redux/auth-reducer';
import { AppStateType } from '../../../redux/redux-store';

type LoginContainerType = {
   getAuthUserDataTC: (
      id: null | number,
      email: null | string,
      login: null | string) => void
}

class LoginContainer extends React.Component<LoginContainerType & mapStateToPropsType> {

   componentDidMount() {
      const { getAuthUserDataTC, auth } = this.props
      getAuthUserDataTC(auth.id, auth.email, auth.email)
   }
   render() {
      return <Login {...this.props} />
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

export default connect(mapStateToProps, { getAuthUserDataTC })(LoginContainer)