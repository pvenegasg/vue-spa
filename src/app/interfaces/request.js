import axios from 'axios';

export default {
  get: (...args) => axios.get(...args),
};
