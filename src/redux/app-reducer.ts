import { getAuthUserDataTC } from "./auth-reducer";
import { AppThunkType } from "./redux-store";

export type AppType = {
   initialized: boolean
}

export type AppActionsTypes = ReturnType<typeof initializeAppAC>

const intilitionState: AppType = {
   initialized: false

}

export const appReducer = (state = intilitionState, action: AppActionsTypes): AppType => {

   switch (action.type) {
      case 'INITIALIZED_SUCCSES':
         return {
            ...state,
            initialized: true,
         }

      default: {
         return state;
      }
   }
}

export const initializeAppAC = () => ({ type: 'INITIALIZED_SUCCSES'} as const)

//ThUNK
export const initializeApp = (): AppThunkType => (dispatch) => {
 let promise = dispatch(getAuthUserDataTC())

 Promise.all([promise])
 .then(()=> {
    dispatch(initializeAppAC())
 })
     
}


