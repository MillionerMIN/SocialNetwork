import React from "react";
import axios from 'axios';

import { connect } from 'react-redux';
import { ProfileUser } from "./ProfileUser";
import { ProfileType, setUsersProfileAC } from '../../../../redux/profile-reducer';
import { RouteComponentProps, withRouter } from "react-router";
import { AppStateType } from "../../../../redux/redux-store";

type ProfileUserPropsType = {
   setUsersProfile: (profile: null | ProfileType) => void
   profile: null | ProfileType
}



type MapStateToPropsType = {
   profile: null | ProfileType
}

class ProfileUserContainer extends React.Component<RouteComponentProps<any> & ProfileUserPropsType> {

   componentDidMount() {
      let userId = this.props.match.params.userId;
      if (!userId) {
         userId = 2
      }
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
         .then(response => {
            this.props.setUsersProfile(response.data)
         })
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

//let WithUpDataContainerComponents = withRouter(ProfileUserContainer);


// export default connect(mapStateToProps, { setUsersProfile: setUsersProfileAC })(ProfileUserContainer);
const connected = connect(mapStateToProps, { setUsersProfile: setUsersProfileAC })(ProfileUserContainer);
export default withRouter(connected);