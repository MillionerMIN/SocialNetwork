import { ProfileType } from '../api/usersApi';

import { AppStateType } from './redux-store';



//Auth Selectors
export const getAuth = (state: AppStateType): number | null => {
  return state.auth.id
}

// Profile Page Selectors
export const getProfile = (state: AppStateType): ProfileType => {
  //@ts-ignore
  return state.profilePage.profile
}
export const getProfileId = (state: AppStateType): string => {
  //@ts-ignore
  return state.profilePage.profile?.userId
}