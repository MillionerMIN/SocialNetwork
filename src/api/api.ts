import axios from 'axios';

//instance - экземпляр
export const instance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {
      "API-KEY": 'c776464e-9336-49f9-96f6-6e3857c87294'
   }
})  