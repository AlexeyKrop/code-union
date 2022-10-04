import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BACK_URL || 'http://188.225.83.80:6719/',
});

instance.defaults.headers.common['acces-token'] = '';
