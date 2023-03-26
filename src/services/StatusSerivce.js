import axios from "axios";
import * as actionTypes from '../redux/constants/constants'
const TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzOCIsIkhldEhhblN0cmluZyI6IjA2LzA4LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY5MTI4MDAwMDAwMCIsIm5iZiI6MTY2MjM5NzIwMCwiZXhwIjoxNjkxNDI3NjAwfQ.66mNB20qUNFA8TlIzjAq7Ekv1hVfR3hQB4I3_yLui8Y";
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
