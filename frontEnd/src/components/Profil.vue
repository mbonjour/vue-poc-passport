<template>
  <div class="profil">
    <p>{{ user.displayName }}</p>
  </div>
</template>

<script>
export default {
  name: 'profil',
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
