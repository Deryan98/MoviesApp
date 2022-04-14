import axios from 'axios';

const baseURL = 'https://reqres.in/api';

const loginApi = axios.create({baseURL});

export default loginApi;
