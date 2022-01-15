<template>
  <NuxtLink
    :to="to"
    class="text-gray-400 focus:text-primary-focus hover:text-primary w-full justify-center inline-block text-center pt-2 pb-1"
  >
    <div
      class="icon inline-block fill-current"
    >
      <slot></slot>
    </div>
    <span
      class="tab block text-xs text-current"
      >{{ title }}</span
    >
  </NuxtLink>
</template>

<script>
export default {
  props: {
    to: { type: String, required: true },
    title: { type: String, required: true },
  },
}
</script>

<style>
a.nuxt-link-exact-active {
  @apply text-primary-focus;
}
</style>
