<template>
  <div
    :class="[
      checked ? 'bg-accent-focus bg-opacity-75 text-white ' : 'bg-white ',
    ]"
    class="relative flex px-5 py-4 rounded-lg shadow-md cursor-pointer focus:outline-none transition-colors duration-500"
  >
    <div class="flex items-center justify-between w-full">
      <div class="flex items-center">
        <div class="text-sm">
          <p
            :class="checked ? 'text-white' : 'text-gray-900'"
            class="font-medium transition-colors duration-300"
          >
            {{ title }}
          </p>
          <span
            :class="checked ? 'text-white text-opacity-70' : 'text-gray-500'"
            class="inline transition-colors duration-300"
          >
            <span>
              {{
                items
                  ? items.length > 1
                    ? items.length + ' éléments'
                    : '1 élément'
                  : 'aucun élément'
              }}
            </span>
          </span>
        </div>
      </div>
      <div v-show="checked" class="flex-shrink-0 text-white flex">
        <div
          class="animate__animated animate__zoomIn ml-2 w-6 h-6 bg-white bg-opacity-20 rounded-full flex justify-center items-center"
        >
          <ph-check />
        </div>
        <div
          class="animate__animated animate__zoomIn ml-2 w-6 h-6 bg-white group-hover:bg-black bg-opacity-20 group-hover:bg-opacity-20 transition-colors duration-500 rounded-full flex justify-center items-center"
        >
          <ph-pencil-simple />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { PhPencilSimple, PhCheck } from 'phosphor-vue'

export default {
  components: { PhPencilSimple, PhCheck },
  props: {
    title: { type: String, required: true },
    items: { type: Array, required: false, default: null },
    checked: { type: Boolean, required: false, default: false },
  },
}
</script>

<style></style>
