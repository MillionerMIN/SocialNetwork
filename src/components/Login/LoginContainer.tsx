
import React from 'react';
import axios from 'axios'
import { connect } from 'react-redux';
import { Login } from './Login';
import { setAuthUserData, AuthType } from '../../redux/auth-reducer';
import { AppStateType } from '../../redux/redux-store';

type LoginContainerType = {
   setAuthUserData: (
      id: null | number,
      email: null | string,
      login: null | string) => void
}

class LoginContainer extends React.Component<LoginContainerType & mapStateToPropsType > {

   componentDidMount() {
      
      axios.get(`https://social-network.samuraijs.com/api/1.0//auth/me`, { withCredentials: true })
         .then(response => {    
            if (response.data.resultCode === 0) {
               let { email, id, login } = response.data.data
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