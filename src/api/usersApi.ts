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

   deleteFollow(userId: number) {
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
      return instance.put(`profile/status`, { status })
   }
}

export const authAPI = {
   me() {
      return instance.get('auth/me')
   },
   login(email: string, password: string, rememberMe: boolean) {
      return instance.post('auth/login', { email, password, rememberMe})
   },
   loginout() {
      return instance.delete('auth/login')
   },
}