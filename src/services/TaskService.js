import axios from "axios";
import * as actionTypes from '../redux/constants/constants'

const DOMAIN = 'https://jiranew.cybersoft.edu.vn/api'
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJOb2RlanMgMzAiLCJIZXRIYW5TdHJpbmciOiIxMi8xMC8yMDIzIiwiSGV0SGFuVGltZSI6IjE2OTcwNjg4MDAwMDAiLCJuYmYiOjE2NzkyNDUyMDAsImV4cCI6MTY5NzIxNjQwMH0.zHBe1xuPzYEovj4ort--O3_1lX_L3XKX4XgpI4soOUM';
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


