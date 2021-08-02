import React from 'react';
import { connect } from 'react-redux';
import { AppDispatchType, AppStateType } from '../../redux/redux-store';
import axios from 'axios';
import { setUsersAC, followAC, unFollowAC, UsersType, setCurrentPageAC, setUsersTotalCountAC, UsersPageType } from '../../redux/users-reducer';
import { Users } from './Users';


type UsersPropsType = {
   state: UsersPageType
   pageSize: number
   totalUsersCount: number
   currentPage: number
   follow: (userId: number) => void
   unFollow: (userId: number) => void
   setUsers: (users: Array<UsersType>) => void
   setCurrentPage: (pageNumber: number) => void
   setUsersTotalCount: (totalCount: number) => void
}

class UsersWrapper extends React.Component<UsersPropsType> {
   componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
         .then(response => {
            this.props.setUsers(response.data.items)
            this.props.setUsersTotalCount(response.data.totalCount / 100)
         })
   }

   onPageChanget = (pageNumber: number) => {
      this.props.setCurrentPage(pageNumber)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
         .then(response => {
            this.props.setUsers(response.data.items)
         })
   }

   render() {
      return <Users users={this.props.state}
         pageSize={this.props.pageSize}
         totalUsersCount={this.props.totalUsersCount}
         currentPage={this.props.currentPage}
         follow={this.props.follow}
         unFollow={this.props.unFollow}
         onPageChanget={this.onPageChanget}
       />
   }
}

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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersWrapper)

export default UsersContainer;
