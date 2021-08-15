import { authAPI } from "../api/usersApi";
import { Dispatch } from 'redux';

const SET_USER_DATA = 'SET_USER_DATA';

export type AuthType = {
   id: null | number
   email: null | string
   login: null | string
   isAuth: boolean
}

export type ActionsTypes = ReturnType<typeof setAuthUserDataAC>

const intilitionState: AuthType = {
   id: null,
   email: null,
   login: null,
   isAuth: false,
}

export const authReducer = (state = intilitionState, action: ActionsTypes): AuthType => {

   switch (action.type) {
      case SET_USER_DATA:
         return {
            ...state,
            ...action.data,
            isAuth: true
         }

      default: {
         return state;
      }
   }
}

export const setAuthUserDataAC = (
   id: null | number,
   email: null | string,
   login: null | string) => ({ type: SET_USER_DATA, data: { id, email, login } } as const)

//ThUNK
export const getAuthUserDataTC = () => (dispatch: Dispatch) => {
   authAPI.getAuth()
      .then(data => {
         if (data.resultCode === 0) {
            let { email, id, login } = data.data
            dispatch(setAuthUserDataAC(id, email, login))
         }
      })
}



