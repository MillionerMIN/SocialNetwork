import React from 'react';
import { connect } from 'react-redux';
import { ProfileUser } from './ProfileUser';
import {
  ProfileType,
  getProfileTC,
  getStatusTC,
  updateStatusTC,
  updatePhotoTC,
} from '../../../../redux/profile-reducer';
import { RouteComponentProps, withRouter } from 'react-router';
import { AppStateType } from '../../../../redux/redux-store';
import { compose } from 'redux';

type ProfileUserPropsType = {};

type MapStateToPropsType = {
  profile: null | ProfileType;
  status: string;
  authId: number | null;
  photos: string;
};

type MapDispatchToPropsType = {
  getProfileTC: (userId: number) => void;
  getStatusTC: (userId: number) => void;
  updateStatusTC: (status: string) => void;
  updatePhotoTC: (savePhoto: string) => void;
};

class ProfileUserContainer extends React.Component<
  RouteComponentProps<any> &
    ProfileUserPropsType &
    MapStateToPropsType &
    MapDispatchToPropsType
> {
  refreshProfile() {
    let profileId = this.props.match.params.userId;
    if (!profileId) {
      profileId = this.props.authId;
      if (!profileId) {
        this.props.history.push('/login');
      }
    }

    this.props.getProfileTC(profileId);
    this.props.getStatusTC(profileId);
  }

  componentDidMount() {
     this.refreshProfile()
  }

  componentDidUpdate(prevProps: any, prevState: any) {
    if (prevProps.photos !== this.props.photos) {
       this.refreshProfile();
    }
    if (prevProps.status !== this.props.status) {
       this.refreshProfile();
    }
  }
  render() {
    console.log('render');

    return (
      <ProfileUser
        {...this.props}
        isOwner={!this.props.match.params.userId}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatusTC}
        savePhoto={this.props.updatePhotoTC}
      />
    );
  }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authId: state.auth.id,
    photos: state.profilePage.photos,
  };
};

export default compose<React.ComponentType>(
  connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(
    mapStateToProps,
    { getProfileTC, getStatusTC, updateStatusTC, updatePhotoTC }
  ),
  withRouter
)(ProfileUserContainer);
