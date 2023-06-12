import axios from "@/services/axios";
export const getUserPosts = () => {
    return axios.get('my-posts')
}

export const createPost = (data) => {
    return axios.post('my-posts', data)
}

export const updatePost = () => {
    return axios.put('my-posts')
}

export const deletePost = (data) => {
    console.log(data);
    return axios.delete('my-posts', { data: data })
}