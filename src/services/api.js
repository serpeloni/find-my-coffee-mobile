import axios from 'axios';

const Api = axios.create({baseURL: 'https://32c7dae72d9e.ngrok.io/api/v1'});

export default Api;
