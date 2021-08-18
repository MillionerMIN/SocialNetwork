import React from 'react';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';
import { follow, unFollow, setCurrentPage, UsersPageType, setFollowingInProgress, getUsersTC } from '../../redux/users-reducer';
import { Users } from './Users';
import { Spinner } from '../Spinner/Spinner';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import { withRouter } from 'react-router';
import { compose } from 'redux';

type UsersPropsType = {
   state: UsersPageType
   pageSize: number
   totalUsersCount: number
   currentPage: number
   isFatching: boolean
   followingInProgress: number[]
   follow: (userId: number) => void
   unFollow: (userId: number) => void
   setCurrentPage: (pageNumber: number) => void
   setFollowingInProgress: (isFatching: boolean, userId: number) => void
   getUsersTC: (currentPage: number, pageSize: number) => void
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
      this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
   }

   onPageChanget = (pageNumber: number) => {
      this.props.getUsersTC(pageNumber, this.props.pageSize)
      this.props.setCurrentPage(pageNumber)
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

export default compose<React.ComponentType>(connect(mapStateToProps,
   {
      follow,
      unFollow,
      setCurrentPage,
      setFollowingInProgress,
      getUsersTC,
   }),
   withRouter,
   withAuthRedirect)(UsersContainer);