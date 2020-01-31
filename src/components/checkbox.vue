<template lang="pug">
  .checkbox
    label.checkbox__label
      input.checkbox__input.visually-hidden(type='checkbox', :checked="checked", :name="name", :disabled="readonly", @change="$emit('change', $event.target.checked)")
      .checkbox__fake
        svg(class="checkbox__img")
          use(xlink:href='/sprite.svg#check')
</template>
<script>
export default {
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    name: {
      type: String,
      default: "check"
    },
    readonly: {
      type: Boolean,
      default: false
    },
    checked: {
      type: Boolean,
      default: false
    }
  },
}
</script>
<style lang="scss" scoped>
  .checkbox{
    user-select: none;
    &__label{
    cursor: pointer;
    display: flex;
    align-items: center;
    }
    &__fake{
      width: 20px;
      height: 20px;
      border-radius: 2px;
      background-color: $white;
      border: 2px solid $blue;
      position: relative;
    }
    .checkbox__img{
      position: absolute;
      bottom: 2px;
      left: 2px;
      width: 20px;
      height: 20px;
      stroke: $blue;
      fill: none;
      stroke-width: 1px;
      stroke-dasharray: 21;
      stroke-dashoffset: 21;
    }
    &__input:checked~&__fake{
      .checkbox__img {
        stroke-dashoffset: 0;
        transition: stroke-dashoffset 0.5s;
      }
    }
  }
</style>