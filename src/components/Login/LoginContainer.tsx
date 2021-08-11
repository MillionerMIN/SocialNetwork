
import React from 'react';
import { connect } from 'react-redux';
import { Login } from './Login';
import { setAuthUserData, AuthType } from '../../redux/auth-reducer';
import { AppStateType } from '../../redux/redux-store';
import { userAPI } from '../../api/authApi';

type LoginContainerType = {
   setAuthUserData: (
      id: null | number,
      email: null | string,
      login: null | string) => void
}

class LoginContainer extends React.Component<LoginContainerType & mapStateToPropsType> {

   componentDidMount() {

      userAPI.getAuth()
         .then(data => {
            if (data.resultCode === 0) {
               let { email, id, login } = data.data
               this.props.setAuthUserData(id, email, login)
            }
         })
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

export default connect(mapStateToProps, { setAuthUserData })(LoginContainer)