<script>
import sourceData from '@/data.json'
export default {
  data() {
    return {
      destinations: sourceData.destinations
    }
  }
}
</script>

<template>
  <div class="home">
    <h1>All Destinations</h1>
    <div class="destinations">
      <AppLink
          v-for="destination in destinations"
          :key="destination.slug"
          :to="{ name: 'Destination.Show', params: { destinationSlug: destination.slug } }"
      >
        <h2>{{ destination.name }}</h2>
        <img :src="`/images/${destination.image}`" :alt="destination.name">
      </AppLink>
    </div>
  </div>
</template>

<style scoped>

</style>
