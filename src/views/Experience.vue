<script>
import sourceData from '@/data.json'

export default {
  props: {
    destinationSlug: { type: String, required: true },
    experienceSlug: { type: String, required: true }
  },
  data() {
    return {
      destination: {},
      experience: {}
    }
  },
  // computed: {
  //   destination() {
  //     return sourceData.destinations.find(destination => destination.slug === this.destinationSlug)
  //   },
  //   experience() {
  //     return this.destination.experiences.find(experience => experience.slug === this.experienceSlug)
  //   }
  // }
  methods: {
    async getDestination() {
      this.destination = await sourceData.destinations.find(destination => destination.slug === this.destinationSlug)
    },
    async getExperience() {
      this.experience = await this.destination.experiences.find(experience => experience.slug === this.experienceSlug)
    }
  },
  async created() {
    await this.getDestination()
    await this.getExperience()
  }
}
</script>

<template>
  <section>
    <h1>{{ experience.name }}</h1>
    <img :src="`/images/${experience.image}`" :alt="experience.name">
    <p>{{ experience.description }}</p>
  </section>
</template>

<style scoped>

</style>