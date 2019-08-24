import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const insertNote = payload => api.post(`/note`, payload)
export const getAllNote = () => api.get(`/notes`)
export const updateNoteById = (id, payload) => api.put(`/note/${id}`, payload)
export const deleteNoteById = id => api.delete(`/note/${id}`)
export const getNoteById = id => api.get(`/note/${id}`)

export const insertUser = payload => api.post('/user', payload)
export const updateUserById = (id, payload) => api.put(`/user/${id}`, payload)
export const deleteUserById = id => api.delete(`/user/${id}`)
export const getUserById = id => api.get(`/user/${id}`)
export const SignInUser = payload => api.post('/user/signin', payload)
export const SignOutUser = payload => api.post('/user/signout', payload)

const apis = {
    insertNote,
    insertUser,
    getAllNote,
    updateNoteById,
    updateUserById,
    deleteNoteById,
    deleteUserById,
    getNoteById,
    getUserById,
    SignInUser,
    SignOutUser
}

export default apis