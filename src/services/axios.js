import axios from "axios";

const instance = axios.create({
  baseURL: 'https://localhost:3335'
});

//instance.defaults.headers.common['Authorization'] = localStorage.getItem(ACCESS_TOKEN);
//instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default instance