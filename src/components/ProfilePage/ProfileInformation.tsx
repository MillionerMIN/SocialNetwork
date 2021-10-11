import s from './ProfileInformation.module.scss';
import profileBg from '../../image/profile/ProfileImg.jpg';
import { ProfileType } from '../../api/usersApi';
import profilePhoto from '../../image/icons/user.png';

type ProfileInformationType = {
  profile: ProfileType;
};

export const ProfileInformation = (props: ProfileInformationType) => {
  const { fullName, photos, lookingForAJobDescription } = props.profile;

  return (
    <div className={s.pageInfor}>
      <div className={s.profileWrapper}>
        <img src={profileBg} alt="profileImg" />
        <div className={s.profileInfo}>
          <div className={s.photo}>
            <img src={photos.large || profilePhoto} alt="userPhoto" />
          </div>
          <div className={s.info}>
            <div>{fullName}</div>
            <div>location</div>
            <div>{lookingForAJobDescription}</div>
            <button>contact info</button>
            <button>connection</button>
          </div>
        </div>
      </div>
    </div>
  );
};
