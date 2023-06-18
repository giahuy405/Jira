import axios from "axios";
const DOMAIN = "https://jiranew.cybersoft.edu.vn/api";
const TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJOb2RlanMgMzAiLCJIZXRIYW5TdHJpbmciOiIxMi8xMC8yMDIzIiwiSGV0SGFuVGltZSI6IjE2OTcwNjg4MDAwMDAiLCJuYmYiOjE2NzkyNDUyMDAsImV4cCI6MTY5NzIxNjQwMH0.zHBe1xuPzYEovj4ort--O3_1lX_L3XKX4XgpI4soOUM";

export const priorityService = {
    fetchPriority: (id) =>
        axios({
            url: `${DOMAIN}/Priority/getAll`,
            method: "GET",
            headers: {
                TokenCybersoft: TOKEN,
            },
            params: {
                id
            }
        }),
};
