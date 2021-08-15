import { instance } from "./api";

export const usersAPI = {
   getUsers(pageNumber: number, pageSize: number) {
      return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
         .then(response => {
            return response.data
         });
   },
   postFollow(userId: number) {
      return instance.post(`follow/${userId}`)
         .then(response => {
            return response.data
         });
   },

   deletFollow(userId: number) {
      return instance.delete(`follow/${userId}`)
         .then(response => {
            return response.data
         });
   },
   getProfile(userId: number) {
      return instance.get(`profile/${userId}`)
         .then(response => {
            return response.data
         })
   }
}