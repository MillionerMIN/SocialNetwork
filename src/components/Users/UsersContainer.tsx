import React from 'react';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';
import { setUsers, follow, unFollow, UsersType, setCurrentPage, setUsersTotalCount, UsersPageType, setIsFetching, setFollowingInProgress } from '../../redux/users-reducer';
import { Users } from './Users';
import { Spinner } from '../Spinner/Spinner';
import { usersAPI } from '../../api/usersApi';


type UsersPropsType = {
   state: UsersPageType
   pageSize: number
   totalUsersCount: number
   currentPage: number
   isFatching: boolean
   followingInProgress: number[]
   follow: (userId: number) => void
   unFollow: (userId: number) => void
   setUsers: (users: Array<UsersType>) => void
   setCurrentPage: (pageNumber: number) => void
   setUsersTotalCount: (totalCount: number) => void
   setIsFetching: (isFatching: boolean) => void
   setFollowingInProgress: (isFatching: boolean, userId: number) => void
}

type MSTP = {
   state: UsersPageType
   pageSize: number
   totalUsersCount: number
   currentPage: number
   isFatching: boolean
   followingInProgress: number[]
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
            followingInProgress={this.props.followingInProgress}
            setFollowingInProgress={this.props.setFollowingInProgress}
         />
      </>
   }
}

const mapStateToProps = (state: AppStateType): MSTP => {
   return {
      state: state.usersPage,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage,
      isFatching: state.usersPage.isFatching,
      followingInProgress: state.usersPage.followingInProgress
   }
}

export default connect(mapStateToProps,
   {
      follow,
      unFollow,
      setUsers,
      setCurrentPage,
      setUsersTotalCount,
      setIsFetching,
      setFollowingInProgress
   })(UsersContainer)

///