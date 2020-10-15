import axios from 'axios'

export default {
  getUser (username) {
    axios.defaults.headers['Content-Type'] = 'application/json'
    return axios.get(`http://localhost:3000/${username}`)
  }
}
