<script setup>
import Navigation from '@/components/Navigation.vue'

// export default {
//   components: {
//     Navigation
//   }
// }
</script>

<template>
  <header>
    <Navigation />
  </header>

  <main class="container">
<!--    <router-view :key="$route.path" />-->
    <!--    Sidebar   -->
    <router-view v-slot:="{Component}" class="view left-sidebar" name="LeftSidebar">
      <transition name="slide" mode="out-in">
        <component :is="Component" :key="$route.path"></component>
      </transition>
    </router-view>
    <!--    Main   -->
    <router-view v-slot:="{Component}" class="main-view">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="$route.path"></component>
      </transition>
    </router-view>
  </main>
</template>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  .slide-enter-active,
  .slide-leave-active {
    transition: opacity 1s, transform 1s;
  }
  .slide-enter-from,
  .slide-leave-to {
    opacity: 0;
    transform: translateX(-30%);
  }
  .container {
    display: flex;
  }
  .left-sidebar {
    width: 30%;
    left: 0;
  }
  .main-view {
    width: 100%;
    margin: auto;
  }
</style>
