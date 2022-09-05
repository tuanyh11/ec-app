import axios from "axios";

const API = axios.create({
    headers: {
        "Content-type": "application/json"
    },
    auth: {
        password: 'cs_bf7f0d0b38e00780c620cfe476be1afb63cdb300',
        username: 'ck_f02c4b788ca1e801c2dedde08c03bd99f8dc3967'
      }
})

export default API