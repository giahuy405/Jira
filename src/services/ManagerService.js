import axios from "axios";
import * as actionType from '../redux/constants/constants'
const DOMAIN = "https://jiranew.cybersoft.edu.vn/api";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzOCIsIkhldEhhblN0cmluZyI6IjA2LzA4LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY5MTI4MDAwMDAwMCIsIm5iZiI6MTY2MjM5NzIwMCwiZXhwIjoxNjkxNDI3NjAwfQ.66mNB20qUNFA8TlIzjAq7Ekv1hVfR3hQB4I3_yLui8Y";
const HEADERS = {
    headers: {
      TokenCybersoft: TOKEN,
      Authorization: "Bearer " + localStorage.getItem(actionType.USER_TOKEN)
    },
  };
  export const managerService={
    listUser: ()=>axios.get(`${DOMAIN}/Users/getUser`,HEADERS),
    infoUser: (data)=>axios.get(`${DOMAIN}/Users/getUser?keyword=${data}`,HEADERS),
    editUser: (data)=>axios.put(`${DOMAIN}/Users/editUser`,data,HEADERS),
    deleteUser: (id)=> axios.delete(`${DOMAIN}/Users/deleteUser?id=${id}`,HEADERS),
    createUser: (data)=>axios.post(`${DOMAIN}/Users/signup`,data),
  }