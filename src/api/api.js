import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '49b589f4-f11c-47bc-8f88-7b2bd65e96a1'},
})

export const userApi ={
    getUsers(currentPage = 3, pageSize= 10)  {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    follow(userId){
        return  instance.post(`follow/${userId}`)
            .then(response => response.data)
    },
    unfollow(userId){
       return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    },
}

