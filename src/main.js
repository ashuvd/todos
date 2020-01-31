import './assets/img/icons/favicon.ico';
import './assets/img/icons/clipboard.svg';
import './assets/img/icons/edit.svg';
import './assets/img/icons/trash-alt.svg';
import './assets/img/icons/check.svg';
import Vue from "vue";
import App from "./App.vue";
import router from './router';
import {store} from './store'
new Vue({
  el: "#vue-app",
  router,
  store,
  render: h => h(App)
});
