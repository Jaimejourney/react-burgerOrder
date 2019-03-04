import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-2bc70.firebaseio.com/'
});

export default instance;