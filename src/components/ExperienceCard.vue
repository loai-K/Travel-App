<script>
export default {
  props: {
    experienceData: { type: Object, required: true }
  }
}
</script>

<template>
  <article class="card">
    <img :src="`/images/${experienceData.image}`" :alt="experienceData.name" />
    <span class="card__text">
      {{ experienceData.name }}
    </span>
  </article>
</template>

<style scoped>

</style>