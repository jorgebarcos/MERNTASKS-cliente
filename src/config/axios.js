import axios from 'axios';

const clienteAxios = axios.create({
    baseURL : 'https://shrouded-badlands-40705.herokuapp.com/' 
    //process.env.REACT_APP_BACKEND_URL
})

export default clienteAxios;