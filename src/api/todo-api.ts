import axios, { AxiosRequestHeaders } from "axios";

export const TodoApi = axios.create({
  baseURL: process.env.REACT_APP_URL_API
});

TodoApi.interceptors.request.use((config) => {
  const access = localStorage.getItem('access');
  let token: string='';
  if (!!access) {
    token = 'Bearer ' + access;
    config.headers = {
      ...config.headers,
      Authorization: token
    } as AxiosRequestHeaders;
  }

  return config;
});

