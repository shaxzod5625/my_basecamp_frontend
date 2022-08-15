import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'https://my-basecamp-backend.herokuapp.com//api',
    headers: {
      "Authorization": localStorage.getItem('token') ? `Bearer ${localStorage.getItem('token')}` : ''
    }
  }) 
}