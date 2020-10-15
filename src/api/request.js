import axios from 'axios'

export default {
  getUser (username) {
    axios.defaults.headers['Content-Type'] = 'application/json'
    return axios.get(`https://blooming-forest-87631.herokuapp.com/${username}`)
  }
}
