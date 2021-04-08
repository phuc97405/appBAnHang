import axios from 'axios';
import queryString from 'query-string';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const axiosClient = axios.create({
  baseURL: '',
  headers: {'content-type': 'application/json'},
  paramsSerializer: (params) => queryString.stringify(params),
  timeout: 10000,
});

axiosClient.interceptors.request.use(async (config) => {
  // const token = await AsyncStorage.getItem('accessToken');
  //  if (token) {
  //     config.headers.Authorization = token;
  //   }
  // console.log(config.headers);
  return config;
});

axiosClient.interceptors.response.use(
  async (response) => {
    // console.log('reponse', response.data);
    if (response && response.data) {
      return response.data;
    }
  },
  (error) => {
    //handle error
    throw error;
  },
);
export default axiosClient;
