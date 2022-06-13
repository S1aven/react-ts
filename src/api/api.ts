import axios from "axios";

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '46ac2503-764a-427f-92d6-a93aac9de646'
  }
})

export const usersAPI = {
  getUsers(currentPage: number, pageSize: number) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data)
  },
  follow(id: number) {
    return instance.post(`follow/${id}`)
      .then(response => response.data)
  },
  unfollow(id: number) {
    return instance.delete(`follow/${id}`)
      .then(response => response.data)
  }
}

export const authMeAPI = {
  authMe() {
    return instance.get('auth/me')
      .then(response => response.data)
  }
}

export const profileAPI = {
  getProfile(userId: number) {
    return instance.get(`profile/${userId}`)
      .then(response => response.data)
  }
}

