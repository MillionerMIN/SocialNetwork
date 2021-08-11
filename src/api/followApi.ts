import { instance } from "./api";

export const usersAPI = {
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
   }
}