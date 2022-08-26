import axios from "axios";

const API = axios.create({
    headers: {
        "Content-type": "application/json"
    }
})

export default API