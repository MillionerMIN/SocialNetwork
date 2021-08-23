import React from "react";
// import axios from 'axios';
import c from '../Container.module.scss'
import s from './ProfilePage.module.scss'

import { ProfilePage } from "./ProfilePage";
import { setUsersProfileAC } from '../../redux/profile-reducer';
import { connect } from 'react-redux';

type ProfilePagePropsType = {
   setUsersProfile: (profile: string) => void
}


export class ProfilePageContainer extends React.Component<ProfilePagePropsType> {

   componentDidMount() {
      // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      //    .then(response => {
      //       this.props.setUsersProfile(response.data)
      //    })
   }
   render() {
      return <div className={c.container}>
         <ProfilePage/>

         <div className={s.sidebar}>
            Sidebar
         </div>
      </div>
   }
}
const mapStateToProps = (state: any) => {
}

 connect(mapStateToProps, { setUsersProfileAC })(ProfilePage);