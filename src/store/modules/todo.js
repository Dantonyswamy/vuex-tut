const state = {
    todoList: [
        {
            id: 1,
            text:"first item"
        },
        {
            id: 2,
            text:"second item"
        }
    ]
}
const getters = {
    allTodos: (state) => state.todoList
}
const mutations = {}
const actions = {}


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}