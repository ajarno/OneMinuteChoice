<template>
  <div class="w-full px-4 py-16">
    <div class="w-full max-w-md mx-auto">
      <div
        v-for="list in lists"
        :key="list.title"
        v-bind:set="(checked = list.title === activeList)"
        class="group mb-5"
        @click="() => selectList(list.title)"
      >
        <list-component
          :title="list.title"
          :items="list.items"
          v-bind:checked="checked"
        />
      </div>
    </div>
    <transition
      enter-active-class="animate__animated animate__fadeInRightBig"
      leave-active-class="animate__animated animate__zoomOutRight"
    >
      <modal-component full v-if="editing">
        <list-modifier @closeModal="closeModal" />
      </modal-component>
    </transition>
  </div>
</template>

<script>
import ListComponent from '~/components/lists/ListComponent.vue'
import ListModifier from '~/components/lists/ListModifier.vue'
import ModalComponent from '~/components/modal/ModalComponent.vue'

export default {
  components: { ListComponent, ListModifier, ModalComponent },
  async asyncData({ $axios, store }) {
    const lists = (await $axios.$get(`Lists?view=All`)).records.map((list) => {
      let obj = list.fields
      obj['_id'] = list.id
      return obj
    })
    console.log(lists)
    if (
      !Array.from(lists, (list) => list.title).includes(store.state.list.title)
    )
      store.commit('list/init', lists[0])

    return { lists }
  },
  data() {
    return { editing: false }
  },
  methods: {
    selectList(listName) {
      if (this.activeList === listName) {
        this.getItemsOfList().then(() => {
          this.editing = true
        })
      } else {
        this.$store.commit('list/rename', listName)
      }
    },
    async getItemsOfList() {
      const formula = `listTitle%3D"${this.$store.state.list.title}"`
      const items = (
        await this.$axios.$get(`Items?view=All&filterByFormula=${formula}`)
      ).records.map((list) => {
        let obj = list.fields
        obj['_id'] = list.id
        return obj
      })

      console.log(items)
      this.$store.commit('list/defineItems', items)
    },
    closeModal() {
      this.editing = false
    },
  },
  computed: {
    activeList() {
      return this.$store.state.list.title
    },
  },
}
</script>
