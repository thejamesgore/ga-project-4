import axios from 'axios'

export const baseUrl = 'http://127.0.0.1:8000/api'

export const getProducts = () => {
  return axios.get(`${baseUrl}/products/`)
}
