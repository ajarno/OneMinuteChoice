<template>
  <div>
    <input
      type="text"
      :value="title"
      class="text-2xl font-bold w-full mb-6 input input-ghost transition-colors focus:ring-base-200 focus:ring-2 focus:bg-white focus:bg-opacity-50"
    />
    <div class="mx-3">
      <div class="form-control mb-6">
        <div class="flex space-x-2">
          <input
            type="text"
            placeholder="Nouvel élément"
            ref="inputNewItem"
            class="w-full input transition-colors ring-neutral ring-2 ring-opacity-80 focus:bg-white focus:bg-opacity-50"
            v-on:keyup.enter="addItem"
          />
          <button class="btn" @click="addItem">
            <ph-list-plus />
          </button>
        </div>
      </div>
      <transition-group
        enter-active-class="transform-gpu"
        enter-class="opacity-0 -translate-x-full"
        enter-to-class="opacity-100 translate-x-0"
        leave-active-class="absolute transform-gpu"
        leave-class="opacity-100 translate-x-0"
        leave-to-class="opacity-0 -translate-x-full"
        tag="div"
        class="flex flex-col space-y-4"
        @before-leave="beforeLeave"
      >
        <article
          v-for="(item, index) in items"
          v-bind:key="item.index + ' ' + item.title"
          class="flex items-center p-2 bg-white bg-opacity-15 rounded-2xl shadow-md transition-all duration-300"
        >
          <div class="flex-1">
            <header class="text-lg text-gray-900 font-semibold">
              {{ item.title }}
            </header>
            <div>{{ item.description }}</div>
          </div>
          <button
            class="p-1 hover:bg-gray-100 rounded-md focus:outline-none"
            @click="removeItem(index)"
          >
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </article>
      </transition-group>
      <div class="modal-action">
        <div class="btn btn-block btn-primary" @click="closeModal">Save</div>
      </div>
    </div>
  </div>
</template>

<script>
import { PhListPlus } from 'phosphor-vue'

export default {
  components: { PhListPlus },
  computed: {
    title() {
      return this.$store.state.list.title
    },
    items() {
      return this.$store.state.list.items
    },
  },
  methods: {
    closeModal() {
      this.$emit('closeModal')
    },
    addItem() {
      const item = { title: this.$refs.inputNewItem.value }
      this.$refs.inputNewItem.value = ''
      this.$store.commit('list/addItem', item)
    },
    removeItem(index) {
      this.$store.commit('list/removeItemUsingIndex', index)
    },
    beforeLeave(el) {
      const { marginLeft, marginTop, width, height } =
        window.getComputedStyle(el)
      el.style.left = `${el.offsetLeft - parseFloat(marginLeft, 10)}px`
      el.style.top = `${el.offsetTop - parseFloat(marginTop, 10)}px`
      el.style.width = width
      el.style.height = height
    },
  },
}
</script>

<style></style>
