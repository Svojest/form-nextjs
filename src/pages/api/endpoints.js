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

export async function refreshToken() {
    try {
        const token = localStorage.getItem('refresh_token')
        const response = await axios.post('http://185.22.61.79:8000/v1/login/refresh', {
        },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        return response
    }
    catch (err) {
        console.log(err);
    }
}

export async function checkToken(access_token) {
    try {
        const response = await axios.get('http://185.22.61.79:8000/v1/user',
            {
                headers: {
                    Authorization: `Bearer ${access_token}`
                }
            })

        return true
    }
    catch (err) {
        return false
    }
}


export async function getCity() {
    try {
        const response = await axios.get('http://185.22.61.79:8000/v1/city')

        return response
    }
    catch (err) {
        console.log(err);
    }
}


export async function patchUser(data) {
    try {
        const token = localStorage.getItem('access_token');
        const response = await axios.patch('http://185.22.61.79:8000/v1/user', {
            data,
        },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })


        console.log(data)
        return response
    }
    catch (err) {
        console.log(err);
    }
}

export async function getUserInfo() {
    try {
        const token = localStorage.getItem('access_token');
        const response = await axios.get('http://185.22.61.79:8000/v1/user', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        console.log('Юсер инфо', response)
        return response
    }
    catch (err) {

    }
}