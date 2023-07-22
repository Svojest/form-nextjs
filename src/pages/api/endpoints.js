import axios from "axios"

export async function postPhone(phone) {
    try {
        const response = await axios.post('http://185.22.61.79:8000/v1/login/request', {
            phone
        });
        return response.data.id;
    }
    catch (err) {
        console.log(err);
    }
}

export async function postCode(user_id, confirm_code) {
    try {
        const response = await axios.post('http://185.22.61.79:8000/v1/login/confirm', {
            user_id,
            confirm_code
        })
        return response
    }
    catch (err) {
        console.log(err);
    }
}


// export function postPhone(phone) {
//     console.log(phone)
//     axios.post('http://185.22.61.79:8000/v1/login/request', {
//         phone
//     })
//         .then((res) => {
//             console.log(res)
//             return res.data.id
//         })
//         .catch((err) => {
//             console.log(err)
//             throw err;
//         })
// }

// export function postCode(user_id, confirm_code) {
//     console.log(confirm_code)
//     axios.post('http://185.22.61.79:8000/v1/login/confirm', {
//         user_id,
//         confirm_code
//     })
//         .then((res) => {
//             console.log(res)
//         })
//         .catch((err) => {
//             console.log(err)
//         })
// }