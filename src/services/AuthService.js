import * as actionTypes from '../redux/constants/constants'
import axios from "axios";
const DOMAIN = "https://jiranew.cybersoft.edu.vn/api";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJOb2RlanMgMzAiLCJIZXRIYW5TdHJpbmciOiIxMi8xMC8yMDIzIiwiSGV0SGFuVGltZSI6IjE2OTcwNjg4MDAwMDAiLCJuYmYiOjE2NzkyNDUyMDAsImV4cCI6MTY5NzIxNjQwMH0.zHBe1xuPzYEovj4ort--O3_1lX_L3XKX4XgpI4soOUM";
const HEADERS = {
  headers: {
    TokenCybersoft: TOKEN,
  },
};
export const authService = {
  login: (data) => axios.post(`${DOMAIN}/Users/signin`, data, HEADERS),
  signUp: (data) =>
    axios({
      url: `${DOMAIN}/Users/signup`,
      method: "POST",
      headers: {
        TokenCybersoft: TOKEN,
      },
      data,
    }),
  testTokenAPI: () => axios({
    url: `${DOMAIN}/Users/TestToken`,
    method: 'POST',
    headers: {
      TokenCybersoft: TOKEN,
      Authorization: 'Bearer ' + localStorage.getItem(actionTypes.USER_TOKEN)
    },
  }),
};
