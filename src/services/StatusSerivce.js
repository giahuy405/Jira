import axios from "axios";
import * as actionTypes from '../redux/constants/constants'
const TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJOb2RlanMgMzAiLCJIZXRIYW5TdHJpbmciOiIxMi8xMC8yMDIzIiwiSGV0SGFuVGltZSI6IjE2OTcwNjg4MDAwMDAiLCJuYmYiOjE2NzkyNDUyMDAsImV4cCI6MTY5NzIxNjQwMH0.zHBe1xuPzYEovj4ort--O3_1lX_L3XKX4XgpI4soOUM";
const DOMAIN = "https://jiranew.cybersoft.edu.vn/api";

export const statusService = {
    fetchAllStatus: () =>
        axios({
            url: `${DOMAIN}/Status/getAll`,
            method: "GET",
            headers: {
                TokenCybersoft: TOKEN,
            },
        }),
    updateStatus: (payload) =>
        axios({
            url: `${DOMAIN}/Project/updateStatus`,
            method: "PUT",
            headers: {
                TokenCybersoft: TOKEN,
                Authorization: 'Bearer ' + localStorage.getItem(actionTypes.USER_TOKEN)
            },
            data: payload
        }),
};
