import axios from 'axios';

//instance - экземпляр
export const instance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {
      "API-KEY": 'd001792c-6a9d-4195-832e-06eaa9587214'
   }
})