<template lang="pug">
  .wrapper(:class="{ blockScroll: isBlocked }")
    app-header
    router-view
</template>
<script>
import header from './components/header';

export default {
  components: {
    appHeader: header
  },
  data() {
    return {
      isBlocked: false
    }
  },
}
</script>
<style lang="scss">
  @import 'normalize.css';
  // layout
  @import './assets/styles/fonts.scss';
  @import './assets/styles/mixins.scss';
  // base
  @import "./assets/styles/base.scss";
</style>
