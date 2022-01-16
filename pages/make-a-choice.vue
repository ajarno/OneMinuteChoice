<template>
  <div
    class="h-full mx-8 flex flex-col justify-center items-center text-center"
  >
    <h1 class="mt-24 mb-7 text-4xl font-bold leading-8">{{ title }}</h1>
    <div class="h-full flex justify-center items-center">
      <h2 class="text-2xl font-semibold leading-6">
        {{ aleaItem ? aleaItem.title : aleaItem }}
      </h2>
    </div>
    <div class="mt-14 mb-7">
      <button class="btn btn-lg btn-primary" @click="alea">
        <ph-arrow-clockwise />
      </button>
    </div>
  </div>
</template>

<script>
import { PhArrowClockwise } from 'phosphor-vue'

export default {
  components: { PhArrowClockwise },
  async asyncData({ $axios, store, redirect }) {
    if (store.state.list.title === '') {
      const lists = (
        await $axios.$get(`Lists?view=All&maxRecords=1`)
      ).records.map((list) => {
        let obj = list.fields
        obj['_id'] = list.id
        return obj
      })

      if (lists[0] === undefined) redirect('/settings')

      store.commit('list/init', lists[0])
      console.log(lists[0])
    }

    const formula = `listTitle%3D"${store.state.list.title}"`
    const items = (
      await $axios.$get(`Items?view=All&filterByFormula=${formula}`)
    ).records.map((list) => {
      let obj = list.fields
      obj['_id'] = list.id
      return obj
    })

    if (items[0] === undefined) redirect('/settings')

    console.log(items)
    store.commit('list/defineItems', items)
  },
  data() {
    return {
      aleaNb: null,
    }
  },
  computed: {
    title() {
      return this.$store.state.list.title
    },
    items() {
      return this.$store.state.list.items
    },
    aleaItem() {
      if (this.aleaNb === null) return null
      return this.$store.state.list.items[this.aleaNb]
    },
  },
  methods: {
    alea() {
      this.aleaNb = null
      const max = this.$store.state.list.items.length
      this.aleaNb = Math.floor(Math.random() * max)
    },
  },
}
</script>
