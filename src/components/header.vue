<template lang="pug">
  header.header
    .container.container_header
      .header__left
        router-link(to='/' class='logo')
          svg(class='logo__img')
            use(xlink:href='/sprite.svg#clipboard')
      .header__right
        ul.menu
          li.menu__item
            router-link(to=`/todos/create` class='menu__link') Создать заметку
</template>

<script>
export default {
  props: {
    todoData: {
      type: Object,
      default: () => {
        return {
          id: "",
          title: "",
          desc: ""
        };
      }
    }
  },
  mounted() {
 
  }
};
</script>
<style lang="scss">
.container{
  &_header{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
.header{
  width: 100%;
  position: relative;
  z-index: 1;
  background-color: $white;
  padding: 20px 0;
  margin-bottom: 20px;
}
.logo{
  width: 37px;
  height: 37px;
  &__img{
    display: block;
    width: 37px;
    height: 37px;
    fill: $green;
  }
}
.menu{
  display: flex;
  align-items: center;
  &__item{
    margin-right: 30px;
    &:last-child{
      margin-right: 0;
    }
  }
  &__link{
    display: block;
    padding: 10px;
    border-radius: 4px;
    &_active{
      background-color: $gray;
    }
    &:hover{
      background-color: $gray;
      text-decoration: none;
    }
  }
}
</style>
