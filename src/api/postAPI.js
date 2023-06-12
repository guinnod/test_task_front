import axios from "@/services/axios";

export const getUserPosts = () => {
    return axios.get('my-posts')
}

export const createPost = (data) => {
    return axios.post('my-posts', data)
}

export const updatePost = (data) => {
    return axios.put('my-posts', data)
}

export const deletePost = (data) => {
    return axios.delete('my-posts', { data: data })
}

export const getLikedPosts = () => {
    return axios.get('like')
}

export const likePost = (data) => {
    return axios.post('like', data)
}