import React from 'react';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';
import { follow, unFollow, setCurrentPage, setFollowingInProgress, getUsersTC, UsersType } from '../../redux/users-reducer';
import { Users } from './Users';
import { Spinner } from '../common/Spinner/Spinner';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { getPageSize, getTotalUsersCount, getCurrentPage, getIsFatching, getFollowingInProgress, publishedUsersSelector } from '../../redux/users-selects';

type UsersPropsType = {
   users: UsersType[]
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
   users: UsersType[]
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
      console.log('render USERS');

      return <>
         {this.props.isFatching ? <Spinner /> : null}
         <Users users={this.props.users}
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
   console.log('mapStateToProps Users');

   return {
      users: publishedUsersSelector(state),
      pageSize: getPageSize(state),
      totalUsersCount: getTotalUsersCount(state),
      currentPage: getCurrentPage(state),
      isFatching: getIsFatching(state),
      followingInProgress: getFollowingInProgress(state)
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