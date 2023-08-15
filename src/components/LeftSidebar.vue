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
  <ul>
    <li>
      <h4>Welcome, {{ username }}</h4>
      <hr>
    </li>
    <li><AppLink :to="{ name: 'Protected' }">Dashboard</AppLink></li>
    <li><AppLink :to="{ name: 'Invoices' }">Invoices</AppLink></li>
<!--    <li><AppLink :to="{ name: 'Home' }">Logout</AppLink></li>-->
    <li><button class="logout" @click="logout">Logout</button></li>
  </ul>
</template>

<style scoped>
ul {
  background: white;
  padding: 10px;
  list-style: none;
  margin-right: 20px;
}
li {
  margin: 10px;
}
</style>