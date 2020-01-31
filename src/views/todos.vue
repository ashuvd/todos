<template lang="pug">
  main.main
    .container
      .todos
        todo(:todoData="todo" :key="todo.id" v-for="todo in todos" @deleteTodo="deleteTodo")
    modal(v-if="isShowModal" message="Вы действительно хотите удалить todo?", @close="close", @confirm="confirm")
</template>

<script>
import { mapState } from 'vuex';
import todo from '../components/todo';
import modal from '../components/modal';

export default {
  components: {
    todo, modal
  },
  data() {
    return {
      todoDeleteId: 0,
      isShowModal: false
    }
  },
  computed: {
    ...mapState({
      todos: state => state.todos.todos
    })
  },
  created() {
    this.$store.commit('todos/GET_TODOS');
  },
  methods: {
    deleteTodo(id) {
      this.todoDeleteId = id;
      this.isShowModal = true;
    },
    close() {
      this.isShowModal = false;
    },
    confirm() {
      this.$store.commit('todos/DELETE_TODO', this.todoDeleteId);
      this.isShowModal = false;
    }
  }
}
</script>
<style lang="scss">
  .todos{
    width: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
