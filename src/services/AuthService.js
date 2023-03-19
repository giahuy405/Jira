import axios from "axios";
const DOMAIN = 'https://movienew.cybersoft.edu.vn/api'
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzOCIsIkhldEhhblN0cmluZyI6IjA2LzA4LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY5MTI4MDAwMDAwMCIsIm5iZiI6MTY2MjM5NzIwMCwiZXhwIjoxNjkxNDI3NjAwfQ.66mNB20qUNFA8TlIzjAq7Ekv1hVfR3hQB4I3_yLui8Y';

export const authService = {
    testAPI: () => axios({
        url: `${DOMAIN}/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01`,
        method: 'GET',
        headers: {
            TokenCybersoft: TOKEN,
            // lấy token dưới local storage lên gắn thêm Bearer của jwt
            // Authorization: 'Bearer ' + localStorage.getItem('userToken'),
        },
    }),


}