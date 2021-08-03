const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const SET_IS_FETCHING = 'SET_IS_FETCHING';

export type UsersType = {
   id: number
   name: string
   photos: {
      small: string
      large: string
   }
   followed: boolean
   location?: {
      country: string
      city: string
   }
}

export type UsersPageType = {
   users: Array<UsersType>
   pageSize: number
   totalUsersCount: number
   currentPage: number
   isFatching: boolean
}

export type ActionsTypes = ReturnType<typeof follow>
   | ReturnType<typeof unFollow>
   | ReturnType<typeof setUsers>
   | ReturnType<typeof setCurrentPage>
   | ReturnType<typeof setUsersTotalCount>
   | ReturnType<typeof setIsFetching>

const intilitionState: UsersPageType = {
   users: [],
   pageSize: 5,
   totalUsersCount: 0,
   currentPage: 1,
   isFatching: false,
}


const usersReducer = (state = intilitionState, action: ActionsTypes): UsersPageType => {
   switch (action.type) {
      case FOLLOW:
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userId) {
                  return { ...u, followed: true }
               }
               return u;
            })
         }
      case UNFOLLOW:
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userId) {
                  return { ...u, followed: false }
               }
               return u;
            })
         }
      case SET_USERS:
         return {
            ...state,
            users: action.users
         }
      case SET_CURRENT_PAGE:
         return {
            ...state, currentPage: action.currentPage
         }
      case SET_USERS_TOTAL_COUNT:
         return {
            ...state, totalUsersCount: action.totalCount
         }
      case SET_IS_FETCHING:
         return {
            ...state, isFatching: action.isFatching
         }
      default:
         return state;
   }

}

export const follow = (userId: number) => ({ type: FOLLOW, userId } as const)
export const unFollow = (userId: number) => ({ type: UNFOLLOW, userId } as const)
export const setUsers = (users: Array<UsersType>) => ({ type: SET_USERS, users } as const)
export const setCurrentPage = (currentPage: number) => ({ type: SET_CURRENT_PAGE, currentPage } as const)
export const setUsersTotalCount = (totalCount: number) => ({ type: SET_USERS_TOTAL_COUNT, totalCount } as const)
export const setIsFetching = (isFatching: boolean) => ({ type: SET_IS_FETCHING, isFatching } as const)

export default usersReducer;