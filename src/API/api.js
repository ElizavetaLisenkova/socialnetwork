import * as axios from 'axios';

const instance = axios.create({ 
    withCredentials: true, 
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { 'API-KEY': 'f82df6c3-33b7-4f9c-aecf-8cc3197eb73e' }})




export const userAPI = {
    getUsers () {
        return instance.get('users').then((response) => {return response.data})
    },
    getUsers2 (pageNumber = 1, pageSize = 100) {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`).then((response) => {return response.data})
           
    },
    
}