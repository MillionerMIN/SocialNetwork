import React from 'react';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';
import { setUsers, follow, unFollow, UsersType, setCurrentPage, setUsersTotalCount, UsersPageType, setIsFetching } from '../../redux/users-reducer';
import { Users } from './Users';
import { Spinner } from '../Spinner/Spinner';
import { usersAPI } from '../../api/usersApi';


type UsersPropsType = {
   state: UsersPageType
   pageSize: number
   totalUsersCount: number
   currentPage: number
   isFatching: boolean
   follow: (userId: number) => void
   unFollow: (userId: number) => void
   setUsers: (users: Array<UsersType>) => void
   setCurrentPage: (pageNumber: number) => void
   setUsersTotalCount: (totalCount: number) => void
   setIsFetching: (isFatching: boolean) => void
}

class UsersContainer extends React.Component<UsersPropsType> {
   componentDidMount() {
      this.props.setIsFetching(true)
      usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
         .then(data => {
            this.props.setIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setUsersTotalCount(data.totalCount / 140)
         })
   }

   onPageChanget = (pageNumber: number) => {
      this.props.setCurrentPage(pageNumber)
      this.props.setIsFetching(true)
      usersAPI.getUsers(pageNumber, this.props.pageSize)
         .then(data => {
            this.props.setIsFetching(false)
            this.props.setUsers(data.items)
         })
   }

   render() {

      return <>
         {this.props.isFatching ? <Spinner /> : null}
         <Users users={this.props.state}
            pageSize={this.props.pageSize}
            totalUsersCount={this.props.totalUsersCount}
            currentPage={this.props.currentPage}
            follow={this.props.follow}
            unFollow={this.props.unFollow}
            onPageChanget={this.onPageChanget}
         />
      </>
   }
}

const mapStateToProps = (state: AppStateType) => {
   return {
      state: state.usersPage,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage,
      isFatching: state.usersPage.isFatching,
   }
}

export default connect(mapStateToProps,
   {
      follow,
      unFollow,
      setUsers,
      setCurrentPage,
      setUsersTotalCount,
      setIsFetching
   })(UsersContainer)

