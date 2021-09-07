import { AppStateType } from "./redux-store";

type GetUsersType = ReturnType<typeof getUsers>;
type GetPageSizeType = ReturnType<typeof getPageSize>;
type GetTotalUsersCountType = ReturnType<typeof getTotalUsersCount>;
type GetCurrentPageType = ReturnType<typeof getCurrentPage>;
type GetIsFatchingType = ReturnType<typeof getIsFatching>;
type GetFollowingInProgressType = ReturnType<typeof getFollowingInProgress>

export type SelectesType = GetUsersType
  | GetPageSizeType
  | GetTotalUsersCountType
  | GetCurrentPageType
  | GetIsFatchingType
  | GetFollowingInProgressType

export const getUsers = (state: AppStateType) => state.usersPage;
export const getPageSize = (state: AppStateType) => state.usersPage.pageSize;
export const getTotalUsersCount = (state: AppStateType) => state.usersPage.totalUsersCount;
export const getCurrentPage = (state: AppStateType) => state.usersPage.currentPage;
export const getIsFatching = (state: AppStateType) => state.usersPage.isFatching;
export const getFollowingInProgress = (state: AppStateType) => state.usersPage.followingInProgress;