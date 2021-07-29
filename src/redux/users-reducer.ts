const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_USERS = 'SET_USERS';

type UsersType = {
   nameId: number
    perPhoto: string
    follow: boolean
    fullName: string
    location: {
      country: string
        cityName: string
   }
}

export type UsersPageType = {
   users: Array<UsersType>
}

export type ActionsTypes = ReturnType<typeof toggleFollowAC> | ReturnType<typeof setUsersAC>

const intilitionState: UsersPageType = {
   users: [
      {
         nameId: 1,
         perPhoto: '',
         follow: false,
         fullName: 'Vladimir',
         location: {
            country: 'Belarus',
            cityName: 'Minsk',
         }
      },
      {
         nameId: 2,
         perPhoto: '',
         follow: true,
         fullName: 'Vladimir',
         location: {
            country: 'Russia',
            cityName: 'Moskow',
         }
      },
      {
         nameId: 3,
         perPhoto: '',
         follow: true,
         fullName: 'Anna',
         location: {
            country: 'Belarus',
            cityName: 'Minsk',
         }
      },
   ]
}


const usersReducer = (state = intilitionState, action: ActionsTypes): UsersPageType => {
   switch (action.type) {
      case TOGGLE_FOLLOW:
         return {
            ...state,
            users: state.users.map(u => {
               if (u.nameId === action.userId) {
                  return {...u, follow: !true}
               }
               return u;
            })
         }
      case SET_USERS:
         return {
            ...state,
            users: [...state.users, ...action.users ]
         }
      default:
         return state;
   }

}

export const toggleFollowAC = (userId: number) => ({ type: TOGGLE_FOLLOW, userId } as const)
export const setUsersAC = (users:[]) => ({ type: SET_USERS, users }as const)

export default usersReducer;