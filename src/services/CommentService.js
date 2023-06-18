import * as actionTypes from '../redux/constants/constants'
import axios from "axios";
const DOMAIN = "https://jiranew.cybersoft.edu.vn/api";
const TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJOb2RlanMgMzAiLCJIZXRIYW5TdHJpbmciOiIxMi8xMC8yMDIzIiwiSGV0SGFuVGltZSI6IjE2OTcwNjg4MDAwMDAiLCJuYmYiOjE2NzkyNDUyMDAsImV4cCI6MTY5NzIxNjQwMH0.zHBe1xuPzYEovj4ort--O3_1lX_L3XKX4XgpI4soOUM";
const HEADERS= {
    headers:{
        TokenCybersoft: TOKEN,
        Authorization : 'Bearer ' + localStorage.getItem('USER_TOKEN'),
    }
}
export const commentService = {
    getAllComments: (taskId) => axios({
        url: `${DOMAIN}/Comment/getAll`,
        method: 'GET',
        headers: {
            TokenCybersoft: TOKEN,
        },
        params:{
            taskId:taskId
        }
    }),
postComments: (taskId)=> axios.post(`${DOMAIN}/Comment/insertComment`,taskId,HEADERS),
deleteComments: (Id)=> axios.delete(`${DOMAIN}/Comment/deleteComment?idComment=${Id}`,HEADERS),
putComments: (Content,Id) => axios.put(`${DOMAIN}/Comment/updateComment?id=${Id}&contentComment=${Content}`,null,HEADERS)
}