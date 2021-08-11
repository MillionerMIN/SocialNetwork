const SET_USER_DATA = 'SET_USER_DATA';

export type AuthType = {
   id: null | number
   email: null | string
   login: null | string
   isAuth: boolean
}

export type ActionsTypes = ReturnType<typeof setAuthUserData>

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

export const setAuthUserData = (
   id: null | number,
   email: null | string,
   login: null | string) => ({ type: SET_USER_DATA, data: { id, email, login } } as const)




