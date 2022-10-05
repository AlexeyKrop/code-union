import axios from 'axios';

let token;

export const instance = axios.create({
  baseURL:
    process.env.REACT_APP_BACK_URL ||
    'https://cors-anywhere.herokuapp.com/http://188.225.83.80:6719/',
  headers: {
    Authorization: `Bearer ${token}`,
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    'Access-Control-Allow-Credentials': true,
  },
});
//
// instance.defaults.headers.common['acces-token'] = '';
