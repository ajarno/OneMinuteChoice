<template>
  <div class="fixed inset-0 flex justify-center items-center z-50">
    <div
      class="relative mx-auto w-full h-full flex justify-center items-center"
    >
      <div
        class="bg-base-100 shadow-2xl flex flex-col p-8 overflow-y-auto"
        :class="full ? 'w-full h-full' : 'max-w-[80%] max-h-[80%] rounded-2xl'"
      >
        <div class="flex justify-end -m-6">
          <div class="btn btn-circle btn-ghost" @click="closeModal">
            <ph-x :size="24" weight="bold" class="opacity-40" />
          </div>
        </div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { PhX } from 'phosphor-vue'

export default {
  components: { PhX },
  props: {
    full: { type: Boolean, required: false, default: false },
  },
  methods: {
    closeModal() {
      this.$emit('closeModal')
    },
  },
}
</script>

<style></style>
