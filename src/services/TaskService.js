import axios from "axios";
import * as actionTypes from '../redux/constants/constants'

const DOMAIN = 'https://jiranew.cybersoft.edu.vn/api'
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzOCIsIkhldEhhblN0cmluZyI6IjA2LzA4LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY5MTI4MDAwMDAwMCIsIm5iZiI6MTY2MjM5NzIwMCwiZXhwIjoxNjkxNDI3NjAwfQ.66mNB20qUNFA8TlIzjAq7Ekv1hVfR3hQB4I3_yLui8Y';
export const taskService = {
    getAllTaskTypes: () => axios({
        url: `${DOMAIN}/TaskType/getAll`,
        method: 'GET',
        headers: {
            TokenCybersoft: TOKEN,
        },
    }),
    updateTaskDetail: (payload) => axios({
        url: `${DOMAIN}/Project/updateTask`,
        method: 'POST',
        headers: {
            TokenCybersoft: TOKEN,
            Authorization: 'Bearer ' + localStorage.getItem(actionTypes.USER_TOKEN)
        },
        data: payload
    }),
    deleteTaskDetail: (TaskId) => axios({
        url: `${DOMAIN}/Project/removeTask?taskId=${TaskId}`,
        method: 'DELETE',
        headers: {
            TokenCybersoft: TOKEN,
            Authorization: 'Bearer ' + localStorage.getItem(actionTypes.USER_TOKEN)
        }

    })

}


