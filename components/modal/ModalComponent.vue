<template>
  <div
    class="fixed inset-0 flex justify-center items-center z-50"
  >
    <div
      class="relative mx-auto w-full h-full flex justify-center items-center"
    >
      <div
        class="bg-base-100 shadow-2xl flex flex-col p-8 overflow-y-auto"
        :class="full ? 'w-full h-full' : 'max-w-[80%] max-h-[80%] rounded-2xl'"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    full: { type: Boolean, required: false, default: false },
  },
}
</script>

<style></style>
