<script>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
  setup() {
    const username = ref('')
    const password = ref('')
    const router = useRouter()
    const route = useRoute()
    const login = () => {
      window.user = username
      const redirectPath = route.query.redirect || '/protected'
      router.push(redirectPath)
      // this.$router.push({ name: 'Protected' })
    }
    return { username, password, login }
  }
}
</script>

<template>
  <div class="login">
    <form class="form" @submit.prevent="login">
      <h1>Login</h1>
      <label for="username">Username</label>
      <input v-model="username" class="input" name="username" type="text">
      <label for="password">Password</label>
      <input v-model="password" class="input" name="password" type="password">
      <button class="btn">Login</button>
    </form>
  </div>
</template>

<style scoped>

</style>