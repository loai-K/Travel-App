<script>
import ExperienceCard from "@/components/ExperienceCard.vue";
import GoBack from "@/components/GoBack.vue";
import sourceData from '@/data.json'

export default {
  props: {
    destinationSlug: { type: String, required: true }
  },
  components: {
    ExperienceCard,
    GoBack,
  },
  data() {
    return {
      destination: null
    }
  },
  computed: {
    destinationId() {
      return parseInt(this.$route.params.id)
    },
    // destinationSlug() {
    //   // return this.$route.params.slug
    //   return this.$route.params.destinationSlug
    // },
    // destination() {
    //   // return sourceData.destinations.find(destination => destination.id === this.destinationId)
    //   return sourceData.destinations.find(destination => destination.slug === this.destinationSlug)
    // }
  },
  methods: {
    async initData() {
      const response = await fetch(`https://travel-dummy-api.netlify.app/${this.destinationSlug}`)
      this.destination = await response.json()
    },
    async initLocal() {
      this.destination = await sourceData.destinations.find(destination => destination.slug === this.destinationSlug)
    }
  },
  async created() {
    await this.initLocal()
    // await this.initData()
    // this.$watch(
    //     () => this.$route.params,
    //     async () => { this.initLocal }
    // )
  }
}
</script>

<template>
  <div>
  <section v-if="destination" class="destinations">
    <h1>{{ destination.name }}</h1>
    <GoBack />
    <div class="destination-details">
      <img :src="`/images/${destination.image}`" :alt="destination.name" />
      <p>{{ destination.description }}</p>
    </div>
  </section>

  <section class="experiences">
    <h2>Top Experiences in {{ destination.name }}</h2>
    <div class="cards">
      <router-link
          v-for="experience in destination.experiences"
          :key="experience.slug"
          :to="{ name: 'Experience.Show', params: { experienceSlug: experience.slug } }"
      >
        <ExperienceCard :experienceData="experience" />
      </router-link>
    </div>

    <router-view v-slot:="{Component}">
      <transition name="slide" mode="out-in">
        <component :is="Component" :key="$route.path"></component>
      </transition>
    </router-view>

  </section>
  </div>
</template>

<style scoped>

</style>