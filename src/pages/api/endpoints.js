import axios from "axios"

export default function postData(phone) {
    console.log(phone)
    axios.post('http://185.22.61.79:8000/v1/login/request', {
        phone
    })
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
}