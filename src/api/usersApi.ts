import { instance } from "./api";

export type UserType = {
   name: string
   id: number
   photos: {
      small: null | string
      large: null | string
   },
   status: null | string
   followed: boolean
}

type UsersPropsType<T> = {
   items: T
   totalCount: number
   error: null | string
}

export type ProfileType = {
   userId: string
   lookingForAJob: boolean
   lookingForAJobDescription: string
   fullName: string
   contacts: {
      github: string
      vk: string
      facebook: string
      instagram: string
      twitter: string
      website: string
      youtube: string
      mainLink: string
   }
   photos: {
      small: string
      large: string
   }
}

export type AuthType = {
   data: {
      id: number
      email: string
      login: string
   }
   resultCode: number
   messages: string[]
}


//Users API

export const usersAPI = {
   getUsers(pageNumber: number, pageSize: number) {
      return instance.get<UsersPropsType<UserType[]>>(`users?page=${pageNumber}&count=${pageSize}`)
   },
   postFollow(userId: number) {
      return instance.post(`follow/${userId}`)
   },

   deleteFollow(userId: number) {
      return instance.delete(`follow/${userId}`)
   }
}

//Profile API
export const profileAPI = {
   getProfile(userId: number) {
      return instance.get<ProfileType>(`profile/${userId}`)
   },
   getStatus(userId: number) {
      return instance.get<string>(`profile/status/${userId}`)
   },
   updateStatus(status: string) {
      return instance.put(`profile/status`, { status })
   },
   updatePhoto(image: string) {
      const formData = new FormData();
      formData.append('image', image)
      return instance.put(`profile/photo`, formData, {
         headers: {
            'Content-Type': 'multipart/form-data'
         }
      })
   }
}

// Auth API
export const authAPI = {
   me() {
      return instance.get<AuthType>('auth/me')
   },
   login(email: string, password: string, rememberMe: boolean) {
      return instance.post('auth/login', { email, password, rememberMe })
   },
   loginout() {
      return instance.delete('auth/login')
   },
}


