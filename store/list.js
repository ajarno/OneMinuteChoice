export const state = () => ({
  _id: undefined,
  title: '',
  items: [],
})

export const mutations = {
  rename(state, listName) {
    state.title = listName
  },
  addItem(state, item) {
    state.items.push(item)
  },
  removeItem(state, item) {
    state.items.splice(state.items.indexOf(item), 1)
  },
  removeItemUsingIndex(state, index) {
    state.items.splice(index, 1)
  },
  init(state, initialState) {
    state._id = initialState._id
    state.title = initialState.title
    state.items = initialState.items
  },
  defineItems(state, items) {
    state.items = items
  },
}
