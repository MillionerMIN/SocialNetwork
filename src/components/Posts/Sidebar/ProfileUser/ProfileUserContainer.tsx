import React from "react";
import { connect } from 'react-redux';
import { ProfileUser } from "./ProfileUser";
import { ProfileType, getProfileTC, getStatusTC, updateStatusTC } from '../../../../redux/profile-reducer';
import { RouteComponentProps, withRouter } from "react-router";
import { AppStateType } from "../../../../redux/redux-store";
import { compose } from "redux";

type ProfileUserPropsType = {
   
}

type MapStateToPropsType = {
   profile: null | ProfileType
   status: string
   id: number | null
}

type MapDispatchToPropsType = {
   getProfileTC: (userId: number) => void
   getStatusTC: (userId: number) => void
   updateStatusTC: (status: string) => void
}

class ProfileUserContainer extends React.Component<RouteComponentProps<any> & ProfileUserPropsType & MapStateToPropsType & MapDispatchToPropsType> {
   componentDidMount() {

      let profileId = this.props.match.params.userId

      if (!profileId) {
         profileId = this.props.id
      }

      this.props.getProfileTC(profileId)
      this.props.getStatusTC(profileId)
   }
   render() {
      return <ProfileUser {...this.props}
         profile={this.props.profile}
         status={this.props.status} 
         updateStatus={this.props.updateStatusTC}/>
   }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
   return {
      profile: state.profilePage.profile,
      status: state.profilePage.status,
      id: state.auth.id
   }
}

// const connected = connect(mapStateToProps, { getProfileTC, getStatusTC, updateStatusTC })(ProfileUserContainer);
//  withRouter(connected);
export default compose<React.ComponentType>(
   connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, { getProfileTC, getStatusTC, updateStatusTC }),
   withRouter
)(ProfileUserContainer)