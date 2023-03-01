import store from 'storejs';
import router from '../router/index';
import axios from 'axios'


export const checkAuth = async () => {
    try {
        const token = store.get('accessToken');
        const id = store.get('userId')
        let result = await axios.get("http://localhost:3001/auth", {
            params: {
                'accesToken': token,
                'userId': id
            }
        });
        console.log(result.status)

    } catch (error) {
        console.log(error)
        router.push({ name: "LogIn" })
    }
}


export default checkAuth