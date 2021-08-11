import { instance } from "./api"

export const userAPI = {
   getAuth() {
      return instance.get('auth/me')
         .then(
            response => response.data
         )
   }
}