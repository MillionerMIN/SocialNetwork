import { stopSubmit } from "redux-form";
import { authAPI } from "../api/usersApi";
import { AppActionType, AppThunkType } from "./redux-store";

export type AuthType = {
   id: null | number
   email: null | string
   login: null | string
   isAuth: boolean
}

export type AuthActionsTypes = ReturnType<typeof setAuthUserDataAC>

const intilitionState: AuthType = {
   id: null,
   email: null,
   login: null,
   isAuth: false,
}

export const authReducer = (state = intilitionState, action: AppActionType): AuthType => {

   switch (action.type) {
      case 'AUTH/SET_USER_DATA':
         return {
            ...state,
            ...action.payload,
         }

      default: {
         return state;
      }
   }
}

export const setAuthUserDataAC = (
   id: null | number,
   email: null | string,
   login: null | string,
   isAuth: boolean) => ({ type: 'AUTH/SET_USER_DATA', payload: { id, email, login, isAuth } } as const)

//ThUNK
export const getAuthUserDataTC = (): AppThunkType => async (dispatch) => {
   const response = await authAPI.me()

   if (response.data.resultCode === 0) {
      let { email, id, login } = response.data.data
      dispatch(setAuthUserDataAC(id, email, login, true))
   }
}

export const loginTC = (email: string, password: string, rememberMe: boolean): AppThunkType => async (dispatch) => {
   const response = await authAPI.login(email, password, rememberMe)
   if (response.data.resultCode === 0) {
      dispatch(getAuthUserDataTC());
   } else {
      let message = response.data.messages.length > 0 ? response.data.messages[0] : 'some error';
      dispatch(stopSubmit('login', { _error: message }))
   }
}

export const loginoutTC = (): AppThunkType => async (dispatch) => {
   const response = await authAPI.loginout()
   if (response.data.resultCode === 0) {
      dispatch(setAuthUserDataAC(null, null, null, false));
   }
}