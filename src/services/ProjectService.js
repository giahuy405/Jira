import axios from "axios";
import * as actionTypes from '../redux/constants/constants'

const DOMAIN = 'https://jiranew.cybersoft.edu.vn/api'
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJOb2RlanMgMzAiLCJIZXRIYW5TdHJpbmciOiIxMi8xMC8yMDIzIiwiSGV0SGFuVGltZSI6IjE2OTcwNjg4MDAwMDAiLCJuYmYiOjE2NzkyNDUyMDAsImV4cCI6MTY5NzIxNjQwMH0.zHBe1xuPzYEovj4ort--O3_1lX_L3XKX4XgpI4soOUM';

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
    getAllProject: (keyword) => axios({
        url: `${DOMAIN}/Project/getAllProject`,
        method: 'GET',
        headers: {
            TokenCybersoft: TOKEN,
        },
        params: {
            keyword
        }
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
    createTaskProj: (payload) => axios({
        url: `${DOMAIN}/Project/createTask`,
        method: 'POST',
        headers: {
            TokenCybersoft: TOKEN,
            Authorization: 'Bearer ' + localStorage.getItem(actionTypes.USER_TOKEN)
        },
        data: payload
    }),
    getTaskDetail: (payload) => axios({
        url: `${DOMAIN}/Project/getTaskDetail`,
        method: 'GET',
        headers: {
            TokenCybersoft: TOKEN,
            Authorization: 'Bearer ' + localStorage.getItem(actionTypes.USER_TOKEN)
        },
        params: {
            taskId: payload
        }
    }),
}


