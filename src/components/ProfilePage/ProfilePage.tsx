import React from "react";
import c from '../Container.module.scss'
import s from './ProfilePage.module.scss'
import profileImg from '../../img/profile/ProfileImg.jpg'


const ProfilePage = () => {
   return <div className={c.container}>
      <div className={s.wrapper}>
         <div className={s.pageInfor}>
            <div className={s.profileWrapper}>
               <img src={profileImg} alt="profileImg" />
               <div className={s.profileInfo}>
                  <div className={s.photo}>
                     <img src="https://avochka.ru/img/kartinka/1/enot_glass.jpg" alt="photo" />
                  </div>
                  <div className={s.info}>
                     <div>userName</div>
                     <div>location</div>
                     <div>subHeader</div>
                     <button>contact info</button>
                     <button>connaction</button>
                  </div>
               </div>

            </div>
         </div>
         <div className={s.sidebar}>
            Sidebar
         </div>

      </div>

   </div>
}

export {
   ProfilePage
}