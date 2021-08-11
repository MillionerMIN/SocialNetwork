import { instance } from "./api";

export const usersAPI = {
   getUsers(pageNumber: number, pageSize: number) {
      return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
         .then(response => {
            return response.data
         });
   }
}