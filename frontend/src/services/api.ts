import axios from "axios";
import "dotenv/config"

const api = axios.create({
    baseURL: `http://localhost:3000/`,
    timeout: 8000
})

export default api;