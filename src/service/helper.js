import axios from 'axios'
/**
 * @type {Function}
 */
export const http = axios.create({
  baseURL: 'http://localhost:3000/api'
})