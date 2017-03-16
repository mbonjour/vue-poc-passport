<template>
  <div>
    Success: {{user.displayName}} you're logged!
  </div>
</template>

<script>
export default {
  name: 'success',
  data () {
    return {
      user: {}
    }
  },
  created () {
    this.$http.get('/me').then((response) => {
      this.user = response.data.user
    })
  }
}
</script>
