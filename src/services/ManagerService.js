import axios from "axios";
import * as actionType from '../redux/constants/constants'
const DOMAIN = "https://jiranew.cybersoft.edu.vn/api";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJOb2RlanMgMzAiLCJIZXRIYW5TdHJpbmciOiIxMi8xMC8yMDIzIiwiSGV0SGFuVGltZSI6IjE2OTcwNjg4MDAwMDAiLCJuYmYiOjE2NzkyNDUyMDAsImV4cCI6MTY5NzIxNjQwMH0.zHBe1xuPzYEovj4ort--O3_1lX_L3XKX4XgpI4soOUM";
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