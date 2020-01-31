import uuid from 'uuid/v4';

const cards = {
  namespaced: true,
  state: {
    todo: {},
    todos: []
  },
  getters: {

  },
  mutations: {
    GET_TODOS(state) {
      state.todos = localStorage.todos ? JSON.parse(localStorage.todos) : [];
    },
    GET_TODO(state, id) {
      const todo = state.todos.find(t => t.id === id);
      state.todo = todo ? todo : {
        id: uuid(),
        title: "",
        list: []
      };
    },
    ADD_TODO(state) {
      state.todos.push(state.todo);
      localStorage.todos = JSON.stringify(state.todos);
    },
    SAVE_TODO(state) {
      const index = state.todos.findIndex(t => t.id === state.todo.id);
      if (index >= 0) {
        state.todos.splice(index, 1, state.todo);
      }
      localStorage.todos = JSON.stringify(state.todos);
    },
    ADD_ITEM(state, value) {
      const item = {
        id: uuid(),
        name: value,
        active: true
      }
      state.todo.list.push(item)
    },
    DELETE_ITEM(state, id) {
      const index = state.todo.list.findIndex(i => i.id === id);
      if (index >= 0) {
        state.todo.list.splice(index, 1);
      }
    },
    DELETE_TODO(state, id) {
      const index = state.todos.findIndex(t => t.id === id);
      if (index >= 0) {
        state.todos.splice(index, 1);
      }
      localStorage.todos = JSON.stringify(state.todos);
    }
  },
  actions: {

  }
}
export default cards;