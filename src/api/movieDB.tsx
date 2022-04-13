import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'f7ea05193feed87d00ab9dc23d50fbc7',
    language: 'es-ES',
  },
});

export default movieDB;
