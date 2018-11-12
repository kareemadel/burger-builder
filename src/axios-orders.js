import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://butgerbuilder.firebaseio.com/'
});

export default instance;
