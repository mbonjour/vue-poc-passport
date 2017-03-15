export default {
  loggedIn (axios, next) {
    axios.get('/me').then((response) => {
      // moyen de mieux faire
      if (response.data.user) {
        next(true)
      } else {
        next(false)
      }
    })
  }
}
