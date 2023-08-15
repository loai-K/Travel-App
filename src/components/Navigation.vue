<script>
export default {
  data() {
    return {
      renderComponent: true,
      auth: window.user
    }
  },
  methods: {
    async forceRerender() {
      // Remove MyComponent from the DOM
      this.renderComponent = false;

      // Wait for the change to get flushed to the DOM
      await this.$nextTick();

      // Add the component back in
      this.renderComponent = true;

      await this.$forceUpdate();
    }
  }
}
</script>

<template>
  <nav id="nav">
    <a id="logo" href="/"><img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="44" height="44" /></a>
    <AppLink class="title" to="/"><h3>Travel App</h3></AppLink>
    <AppLink to="/">Home</AppLink>
    <AppLink to="/about">About</AppLink>
    <AppLink :to="{ name: 'Protected' }">Dashboard</AppLink>
    <AppLink :to="{ name: 'Login' }">Login</AppLink>
    <AppLink to="https://vuejs.org/">Help</AppLink>

  </nav>
</template>

<style scoped lang="css">
  #nav .active-link {
    color: red;
    border-bottom: 2px solid red;
  }
  #nav .title {
    color: white;
    border: 0 !important;
    //padding: 0 16px 0;
  }
</style>