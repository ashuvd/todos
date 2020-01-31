<template lang="pug">
  .todo
    .todo__title {{ todoData.title }}
    ul.todo__list
      li.todo__item.todo__item_view(:key="item.id" v-for="item in list")
        checkbox.todo__checkbox(:checked="item.active" :readonly="true")
        .todo__name {{ item.name }}
    button.icon.icon_delete(type='button' @click="$emit('deleteTodo', todoData.id)")
      svg(class='icon__img')
        use(xlink:href='/sprite.svg#trash-alt')
    button.icon.icon_edit(type='button' @click="editTodo(todoData.id)")
      svg(class='icon__img')
        use(xlink:href='/sprite.svg#edit')
</template>

<script>
import checkbox from '../components/checkbox';

export default {
  components: {
    checkbox
  },
  props: {
    todoData: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  computed: {
    list() {
      return this.todoData.list.slice(0, 3);
    }
  },
  methods: {
    editTodo() {
      this.$router.push(`/todos/${this.todoData.id}`)
    }
  }
}
</script>
<style lang="scss">
@import '../assets/styles/todo.scss';

.icon{
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  &__img{
    width: 20px;
    height: 20px;
    fill: $red;
  }
  &_edit{
    right: 50px;
    .icon__img{
      fill: $green;
    }
  }
}

</style>
