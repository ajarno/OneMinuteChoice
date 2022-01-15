export const state = () => ({
  title: '',
  items: []
})

export const mutations = {
  add(state, text) {
    state.items.push({
      text,
      done: false
    })
  },
  remove(state, { item }) {
    state.items.splice(state.items.indexOf(item), 1)
  },
  init(state, initialState) {
    state.title = initialState.title
    state.items = initialState.items
  }
}