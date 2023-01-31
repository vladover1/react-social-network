import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '49b589f4-f11c-47bc-8f88-7b2bd65e96a1'},
})

export const userApi ={
    getUsers(currentPage = 1, pageSize= 5)  {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,)
            .then(response => response.data)
    }
}


export const getUsers2 = (currentPage = 1, pageSize= 5) => {
    return instance.get(`follow?page=${currentPage}&count=${pageSize}`, )
        .then(response => response.data)
}