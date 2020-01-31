<template lang="pug">
  .overlay
    .modal
      .modal__title
        .title {{ message }}
      form.modal__form.form.form_modal
        button.form__button.button(type="button" @click="$emit('confirm')") Подтвердить
      button.modal__btn.btn.btn_cancel(type="button" @click="$emit('close')")
        span.btn__icon
</template>

<script>

export default {
  props: {
    message: {
      type: String,
      default: ""
    }
  },
}
</script>
<style lang="scss">
  .overlay{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: color($black a(20%));
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .modal{
    max-width: 400px;
    background-color: $white;
    padding: 16px 16px 13px 16px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    &__title{
      width: 100%;
      margin-bottom: 16px;
      padding-right: 30px;
    }
    &__btn{
      position: absolute;
      top: 16px;
      right: 16px;
      padding: 0;
      .btn__icon{
        margin: 0;
      }
    }
  }
  .form{
    &_modal{
      .form__button{
        align-self: flex-start;
      }
      .form__textarea{
        min-height: 95px;
      }
    }
  }
  .title{
    font-size: 24px;
    line-height: 28px;
    font-weight: 700;
    color: $black;
  }
  .textarea{
    font-size: 24px;
    line-height: 28px;
    font-weight: 700;
    color: $black;
    width: 100%;
  }
</style>
