import { connect } from 'react-redux';
import { AppDispatchType, AppStateType } from '../../redux/redux-store';
import Users from './Users';
import { setUsersAC, followAC, unFollowAC, UsersType, setCurrentPageAC, setUsersTotalCountAC } from '../../redux/users-reducer';

const mapStateToProps = (state: AppStateType) => {
   return {
      state: state.usersPage,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage,
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
      setUsers: (users: Array<UsersType>) => {
         dispatch(setUsersAC(users))
      },
      setCurrentPage: (pageNumber: number) => {
         dispatch(setCurrentPageAC(pageNumber))
      },
      setUsersTotalCount: (totalCount: number) => {
         dispatch(setUsersTotalCountAC(totalCount))
      }
   }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;
