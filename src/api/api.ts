import axios from 'axios';

//instance - экземпляр
export const instance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {
      "API-KEY": '2f72d36e-1b52-486b-b6c9-43c87076fed2'
   }
})