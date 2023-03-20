import axios from "axios";
const DOMAIN = 'https://jiranew.cybersoft.edu.vn/api'
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzOCIsIkhldEhhblN0cmluZyI6IjA2LzA4LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY5MTI4MDAwMDAwMCIsIm5iZiI6MTY2MjM5NzIwMCwiZXhwIjoxNjkxNDI3NjAwfQ.66mNB20qUNFA8TlIzjAq7Ekv1hVfR3hQB4I3_yLui8Y';

export const authService = {
    login: (data) => axios({
        url: `${DOMAIN}/Users/signin`,
        method: 'POST',
        headers: {
            TokenCybersoft: TOKEN,
            // lấy token dưới local storage lên gắn thêm Bearer của jwt
            // Authorization: 'Bearer ' + localStorage.getItem('userToken'),
        },
        data
    }),
    signUp: (data) => axios({
        url: `${DOMAIN}/Users/signup`,
        method: 'POST',
        headers: {
            TokenCybersoft: TOKEN,
        },
        data
    }),
}


 