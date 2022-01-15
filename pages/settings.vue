<template>
  <div class="w-full px-4 py-16">
    <div class="w-full max-w-md mx-auto">
      <div
        v-for="list in lists"
        :key="list.title"
        v-bind:set="(checked = list.title === activeList)"
        class="mb-5"
        @click="activeList = list.title"
      >
        <div
          :class="[
            checked ? 'bg-accent-focus bg-opacity-75 text-white ' : 'bg-white ',
          ]"
          class="relative flex px-5 py-4 rounded-lg shadow-md cursor-pointer focus:outline-none group-hover:ring-2 group-hover:ring-offset-2 group-hover:ring-offset-accent group-hover:ring-white group-hover:ring-opacity-60 group-focus:ring-2 group-focus:ring-offset-2 group-focus:ring-offset-accent group-focus:ring-white group-focus:ring-opacity-60"
        >
          <div class="flex items-center justify-between w-full">
            <div class="flex items-center">
              <div class="text-sm">
                <p
                  :class="checked ? 'text-white' : 'text-gray-900'"
                  class="font-medium"
                >
                  {{ list.title }}
                </p>
                <span
                  v-if="list.items"
                  :class="
                    checked ? 'text-white text-opacity-70' : 'text-gray-500'
                  "
                  class="inline"
                >
                  <span>{{ list.items.length }} éléments</span>
                </span>
              </div>
            </div>
            <div v-show="checked" class="flex-shrink-0 text-white">
              <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="12" fill="#fff" fill-opacity="0.2" />
                <path
                  d="M7 13l3 3 7-7"
                  stroke="#fff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, store }) {
    const lists = (await $axios.$get(`Lists?view=All`)).records.map(
      (list) => list.fields
    )
    console.log(lists)
    if (
      !Array.from(lists, (list) => list.title).includes(store.state.list.title)
    )
      store.commit('list/init', lists[0])

    return { lists, activeList: store.state.list.title }
  },
}
</script>
