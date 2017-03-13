export default {
  loggedIn (axios, next) {
    axios.get('/me').then((response) => {
      if (response.data.user) {
        console.log('returned true to loggedIn')
        next(true)
      } else {
        console.log('returned false to loggedIn')
        next(false)
      }
    })
  }
}
