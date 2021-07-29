import { connect } from 'react-redux';
import { AppDispatchType, AppStateType } from '../../redux/redux-store';
import Users from './Users';
import { setUsersAC, toggleFollowAC } from '../../redux/users-reducer';

const mapStateToProps = (state: AppStateType) => {
   return {
      users: state.usersPage.users
   }
}

const mapDispatchToProps = (dispatch: AppDispatchType) => {
   return {
      toggleFollow: (userId: number) => {
         dispatch(toggleFollowAC(userId))
      },
      setUsers: (users: []) => {
         dispatch(setUsersAC(users))
      }
   }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;
