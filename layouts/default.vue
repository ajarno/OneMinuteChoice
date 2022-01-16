<template>
  <div class="h-screen">
    <div style="height: calc(100vh - 75px)">
      <Nuxt />
    </div>
    <BottomNavigation />
  </div>
</template>

<script>
import BottomNavigation from '~/components/navigation/BottomNavigation.vue'

export default {
  components: { BottomNavigation },
}
</script>

<style></style>
