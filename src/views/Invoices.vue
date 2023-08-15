<script>
import { onBeforeRouteLeave } from "vue-router";

export default {
  setup() {
    onBeforeRouteLeave((to, from) => {
      const confirm = window.confirm("Are you sure, you want to leave?")
      if (!confirm) return false
    })
  }
}
</script>

<template>
  <div>
    <h1>Invoices Page</h1>
  </div>
</template>

<style scoped>

</style>