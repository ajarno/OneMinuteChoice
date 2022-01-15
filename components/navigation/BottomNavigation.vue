<template>
  <section
    id="bottom-navigation"
    class="block fixed inset-x-0 bottom-0 z-10 bg-white shadow"
  >
    <div id="tabs" class="flex justify-between">
      <navigation-icon title="Tirer au hasard" to="/">
        <ph-shuffle :size="25" weight="light" class="drop-shadow-sm fill-current" />
      </navigation-icon>
      <navigation-icon title="Paramètres" to="/settings">
        <ph-gear-six :size="25" weight="light" class="drop-shadow-sm fill-current" />
      </navigation-icon>
    </div>
  </section>
</template>

<script>
import NavigationIcon from './NavigationIcon.vue'
import { PhShuffle, PhGearSix } from 'phosphor-vue'

export default {
  components: { NavigationIcon, PhShuffle, PhGearSix },
}
</script>

<style></style>
