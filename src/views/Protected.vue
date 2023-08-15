<script>
export default {
  data() {
    return {
      username: window.user
    }
  },
  methods: {
    logout() {
      window.user = null
      this.$router.replace({ name: 'Home', hash: '#logout' })
    }
  }
}
</script>

<template>
  <div>
    <section>
      <h1>Dashboard</h1>
      <h3>Greetings, {{ username }}</h3>
      <button class="logout" @click="logout">Logout</button>
    </section>
  </div>
</template>

<style scoped>

</style>