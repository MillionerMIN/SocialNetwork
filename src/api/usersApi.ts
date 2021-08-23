import { instance } from "./api";

// type UserType = {
//    name: string
//    id: number
//    photos: {
//       small: null | string
//       large: null | string
//    },
//    status: null | string
//    followed: boolean
// }

// type UsersPropsType<T> = {
//    items: T
// }

export const usersAPI = {
   getUsers(pageNumber: number, pageSize: number) {
      return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
   },
   postFollow(userId: number) {
      return instance.post(`follow/${userId}`)
   },

   deletFollow(userId: number) {
      return instance.delete(`follow/${userId}`)
   }
}

export const profileAPI = {
   getProfile(userId: number) {
      return instance.get(`profile/${userId}`)
   },
   getStatus(userId: number) {
      return instance.get(`profile/status/${userId}`)
   },
   updateStatus(status: string) {
      return instance.put(`profile/status`, {status})
   }
}

export const authAPI = {
   getAuth() {
      return instance.get('auth/me')
   }
}