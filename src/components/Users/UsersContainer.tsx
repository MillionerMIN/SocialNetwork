import React from 'react';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';
import { follow, unFollow, setCurrentPage, setFollowingInProgress, getUsersTC, UsersType, setPageSize } from '../../redux/users-reducer';
import { Users } from './Users';
import { Spinner } from '../common/Spinner/Spinner';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { getPageSize, getTotalUsersCount, getCurrentPage, getIsFatching, getFollowingInProgress, publishedUsersSelector } from '../../redux/users-selects';

type UsersPropsType = {
  users: UsersType[];
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFatching: boolean;
  followingInProgress: number[];
  follow: (userId: number) => void;
  unFollow: (userId: number) => void;
  setCurrentPage: (pageNumber: number) => void;
  setFollowingInProgress: (isFatching: boolean, userId: number) => void;
  getUsersTC: (currentPage: number, pageSize: number) => void;
  getPageSize: (pageNumber: number, pageSize: number) => void
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
    const { getUsersTC, currentPage, pageSize } = this.props;
    getUsersTC(currentPage, pageSize);
  }

  onPageChange = (pageNumber: number) => {
    const { getUsersTC, setCurrentPage, pageSize } = this.props;
    getUsersTC(pageNumber, pageSize);
    setCurrentPage(pageNumber);
    setPageSize(pageSize);
  };

  onPageSizeChange = (pageNumber: number, pageSize: number) => {
    const { getUsersTC } = this.props;
    getUsersTC(pageNumber, pageSize);
    setPageSize(pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFatching ? <Spinner /> : null}
        <Users
          users={this.props.users}
          pageSize={this.props.pageSize}
          totalUsersCount={this.props.totalUsersCount}
          currentPage={this.props.currentPage}
          follow={this.props.follow}
          unFollow={this.props.unFollow}
          onPageChange={this.onPageChange}
          followingInProgress={this.props.followingInProgress}
          setFollowingInProgress={this.props.setFollowingInProgress}
          onPageSizeChange = {this.onPageSizeChange}
        />
      </>
    );
  }
}

const mapStateToProps = (state: AppStateType): MSTP => {
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
      setPageSize,
      setFollowingInProgress,
      getUsersTC,
   }),
   withRouter,
   withAuthRedirect)(UsersContainer);