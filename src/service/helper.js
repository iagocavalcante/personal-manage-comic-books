import axios from 'axios'
/**
 * @type {Function}
 */
export const promise = axios.create({
  baseURL: 'http://localhost:3000/api'
})