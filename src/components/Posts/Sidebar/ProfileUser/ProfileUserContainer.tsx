import React from "react";
import { connect } from 'react-redux';
import { ProfileUser } from "./ProfileUser";
import { ProfileType, getProfileTC } from '../../../../redux/profile-reducer';
import { RouteComponentProps, withRouter } from "react-router";
import { AppStateType } from "../../../../redux/redux-store";

type ProfileUserPropsType = {
   profile: null | ProfileType
   getProfileTC: (userId: number) => void
}

type MapStateToPropsType = {
   profile: null | ProfileType
}

class ProfileUserContainer extends React.Component<RouteComponentProps<any> & ProfileUserPropsType> {

   componentDidMount() {
      this.props.getProfileTC(this.props.match.params.userId)
   }
   render() {
      return <ProfileUser {...this.props} profile={this.props.profile} />
   }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
   return {
      profile: state.profilePage.profile
   }
}

const connected = connect(mapStateToProps, { getProfileTC })(ProfileUserContainer);
export default withRouter(connected);