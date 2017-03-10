import axios from 'axios'

export default {
  loggedIn () {
    axios.get('/me').then((response) => {
      return response.status === 200
    })
  }
}
