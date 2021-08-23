import { Dispatch } from "redux";
import { usersAPI } from "../api/usersApi";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const SET_IN_FOLLOWING = 'SET_IN_FOLLOWING';

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
   followingInProgress: number[]
}

export type ActionsTypes = ReturnType<typeof followAC>
   | ReturnType<typeof unFollowAC>
   | ReturnType<typeof setUsers>
   | ReturnType<typeof setCurrentPage>
   | ReturnType<typeof setUsersTotalCount>
   | ReturnType<typeof setIsFetching>
   | ReturnType<typeof setFollowingInProgress>


const intilitionState: UsersPageType = {
   users: [],
   pageSize: 5,
   totalUsersCount: 0,
   currentPage: 1,
   isFatching: false,
   followingInProgress: [],
}

const usersReducer = (state: UsersPageType = intilitionState, action: ActionsTypes): UsersPageType => {
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
      case SET_IN_FOLLOWING:
         return {
            ...state,
            followingInProgress: action.isFatching
               ? [...state.followingInProgress, action.userId]
               : state.followingInProgress.filter(id => id !== action.userId)
         }
      default:
         return state;
   }

}

export const followAC = (userId: number) => ({ type: FOLLOW, userId } as const)
export const unFollowAC = (userId: number) => ({ type: UNFOLLOW, userId } as const)
export const setUsers = (users: Array<UsersType>) => ({ type: SET_USERS, users } as const)
export const setCurrentPage = (currentPage: number) => ({ type: SET_CURRENT_PAGE, currentPage } as const)
export const setUsersTotalCount = (totalCount: number) => ({ type: SET_USERS_TOTAL_COUNT, totalCount } as const)
export const setIsFetching = (isFatching: boolean) => ({ type: SET_IS_FETCHING, isFatching } as const)
export const setFollowingInProgress = (isFatching: boolean, userId: number) => ({ type: SET_IN_FOLLOWING, isFatching, userId } as const)

//THUNK
export const getUsersTC = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
   dispatch(setIsFetching(true));
   usersAPI.getUsers(currentPage, pageSize)
      .then(res => {
         dispatch(setIsFetching(false))
         dispatch(setUsers(res.data.items))
         dispatch(setUsersTotalCount(res.data.totalCount / 140))
      })
}

export const follow = (userId: number) => (dispatch: Dispatch) => {
   dispatch(setFollowingInProgress(true, userId))
   usersAPI.postFollow(userId)
      .then(res => {
         if (res.data.resultCode === 0) {
            dispatch(followAC(userId))
         }
         dispatch(setFollowingInProgress(false, userId))
      })
}

export const unFollow = (userId: number) => (dispatch: Dispatch) => {
   dispatch(setFollowingInProgress(true, userId))
   usersAPI.deletFollow(userId)
      .then(res => {
         if (res.data.resultCode === 0) {
            dispatch(unFollowAC(userId))
         }
         dispatch(setFollowingInProgress(false, userId))
      })
}

export default usersReducer;