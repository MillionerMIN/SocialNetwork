import { connect } from 'react-redux';
import { AppDispatchType, AppStateType } from '../../redux/redux-store';
import Users from './Users';
import { setUsersAC, followAC, unFollowAC } from '../../redux/users-reducer';

const mapStateToProps = (state: AppStateType) => {
   return {
      state: state.usersPage
   }
}

const mapDispatchToProps = (dispatch: AppDispatchType) => {
   return {
      follow: (userId: number) => {
         dispatch(followAC(userId))
      },
      unFollow: (userId: number) => {
         dispatch(unFollowAC(userId))
      },
      setUsers: (users: []) => {
         dispatch(setUsersAC(users))
      }
   }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;
