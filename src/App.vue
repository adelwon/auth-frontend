<template>
  <div id="app" class="bg-light h-screen">
    <Navigation />
    <router-view />
  </div>
</template>

<script>
import Navigation from "@/components/NavigationComponent.vue";

export default {
  components: {
    Navigation
  }
};
</script>

<style>
.h-screen {
  height: 100vh;
}
</style>
