<template lang="pug">
  main.main
    .container
      .todo
        .title {{ title }}
        form.todo__form.form.form_title
          label.form__label(for="title") Название заметки:
          input.form__input(id="title" v-model="todo.title")
        ul.todo__list
          li.todo__item(:key="item.id" v-for="item in todo.list")
            form.todo__form.form
              input.form__input(v-model="item.name")
              checkbox.form__checkbox(v-model="item.active")
              button.form__button.button.button_delete(type="button" @click="deleteItem(item.id)") Удалить
        form.todo__form.form.form_add(@submit.prevent="addItem")
          input.form__input(v-model="name")
          button.form__button.button(type="submit") Добавить
        form.todo__form.form.form_action(v-if="$route.params.id")
          button.form__button.button(type="button" @click="saveTodo") Сохранить изменения
          button.form__button.button.button_cancel(type="button" @click="cancelEdit") Отменить редактирование
          button.form__button.button.button_delete(type="button" @click="deleteTodo(todo.id)") Удалить заметку
        form.todo__form.form.form_action(v-else @submit.prevent="addTodo")
          button.form__button.button(type="submit") Создать заметку
    modal(v-if="isShowModal" :message="message", @close="close", @confirm="confirm")
</template>

<script>
import { mapState } from 'vuex';
import checkbox from '../components/checkbox';
import modal from '../components/modal';

export default {
  components: {
    checkbox, modal
  },
  data() {
    return {
      todoDeleteId: 0,
      isShowModal: false,
      title: "",
      name: "",
      message: ""
    }
  },
  computed: {
    ...mapState({
      todo: state => state.todos.todo
    })
  },
  created() {
    this.title = this.$route.params.id ? "Редактирование заметки" : "Создание заметки";
    this.$store.commit('todos/GET_TODO', this.$route.params.id);
  },
  methods: {
    addTodo() {
      if (this.todo.title) {
        this.$store.commit('todos/ADD_TODO');
        this.$router.push('/');
      }
    },
    saveTodo() {
      if (this.todo.title) {
        this.$store.commit('todos/SAVE_TODO');
        this.$router.push('/');
      }
    },
    addItem() {
      if (this.name) {
        this.$store.commit('todos/ADD_ITEM', this.name);
      }
      this.name = "";
    },
    deleteItem(id) {
      this.$store.commit('todos/DELETE_ITEM', id);
    },
    deleteTodo(id) {
      this.todoDeleteId = id;
      this.message = "Вы действительно хотите удалить todo?";
      this.isShowModal = true;
    },
    cancelEdit() {
      this.todoDeleteId = 0;
      this.message = "Вы действительно хотите отменить редактирование?";
      this.isShowModal = true;
    },
    close() {
      this.isShowModal = false;
    },
    confirm() {
      if (this.todoDeleteId) {
        this.$store.commit('todos/DELETE_TODO', this.todoDeleteId);
      }
      this.isShowModal = false;
      this.$router.push('/');
    }
  }
}
</script>
<style lang="scss">
@import '../assets/styles/mixins.scss';
@import '../assets/styles/todo.scss';
  .todo{
    &__form{
      flex-direction: row;
      align-items: center;
    }
    &__subtitle{
      font-size: 20px;
      margin-bottom: 20px;
    }
  }
  .form{
    &_add{
      padding-left: 20px;
      margin-bottom: 30px;
    }
    &_action{
      justify-content: flex-end;
      .form__button{
        margin-right: 10px;
        &:last-child{
          margin-right: 0;
        }
      }
      @include tablet{
        flex-direction: column;
        .form__button {
          margin-bottom: 10px;
          margin-right: 0;
          &:last-child{
            margin-bottom: 0;
          }
        }
      }
    }
    &_title{
      margin-bottom: 20px;
    }
  }
  .title{
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 20px;
    align-self: center;
  }
</style>