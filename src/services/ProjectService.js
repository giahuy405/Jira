import axios from "axios";
import * as actionTypes from '../redux/constants/constants'

const DOMAIN = 'https://jiranew.cybersoft.edu.vn/api'
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzOCIsIkhldEhhblN0cmluZyI6IjA2LzA4LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY5MTI4MDAwMDAwMCIsIm5iZiI6MTY2MjM5NzIwMCwiZXhwIjoxNjkxNDI3NjAwfQ.66mNB20qUNFA8TlIzjAq7Ekv1hVfR3hQB4I3_yLui8Y';

export const projectService = {
    fetchProjectCategory: () => axios({
        url: `${DOMAIN}/ProjectCategory`,
        method: 'GET',
        headers: {
            TokenCybersoft: TOKEN,
        },
    }),
    createProject: (data) => axios({
        url: `${DOMAIN}/Project/createProjectAuthorize`,
        method: 'POST',
        headers: {
            TokenCybersoft: TOKEN,
            Authorization: 'Bearer ' + localStorage.getItem(actionTypes.USER_TOKEN)
        },
        data
    }),
    getAllProject: () => axios({
        url: `${DOMAIN}/Project/getAllProject`,
        method: 'GET',
        headers: {
            TokenCybersoft: TOKEN,

        },
    }),
    getProjectDetail: (id) => axios({
        url: `${DOMAIN}/Project/getProjectDetail`,
        method: 'GET',
        headers: {
            TokenCybersoft: TOKEN,
            Authorization: 'Bearer ' + localStorage.getItem(actionTypes.USER_TOKEN)
        },
        params: {
            id
        }
    }),
    updateProject: (payload) => axios({
        url: `${DOMAIN}/Project/updateProject`,
        method: 'PUT',
        headers: {
            TokenCybersoft: TOKEN,
            Authorization: 'Bearer ' + localStorage.getItem(actionTypes.USER_TOKEN)
        },
        params: {
            projectId: payload.id
        },
        data: payload
    }),
    deleteProject: (id) => axios({
        url: `${DOMAIN}/Project/deleteProject`,
        method: 'DELETE',
        headers: {
            TokenCybersoft: TOKEN,
            Authorization: 'Bearer ' + localStorage.getItem(actionTypes.USER_TOKEN)
        },
        params: {
            projectId: id
        },
    }),
    getUserProject: (keyword) => axios({
        url: `${DOMAIN}/Users/getUser`,
        method: 'GET',
        headers: {
            TokenCybersoft: TOKEN,
            Authorization: 'Bearer ' + localStorage.getItem(actionTypes.USER_TOKEN)
        },
        params: {
            keyword
        }
    }),
    assignUserProject: (payload) => axios({
        url: `${DOMAIN}/Project/assignUserProject`,
        method: 'POST',
        headers: {
            TokenCybersoft: TOKEN,
            Authorization: 'Bearer ' + localStorage.getItem(actionTypes.USER_TOKEN)
        },
        data: payload
    }),
    removeUserFromPrj: (payload) => axios({
        url: `${DOMAIN}/Project/removeUserFromProject`,
        method: 'POST',
        headers: {
            TokenCybersoft: TOKEN,
            Authorization: 'Bearer ' + localStorage.getItem(actionTypes.USER_TOKEN)
        },
        data: payload
    }),
}


