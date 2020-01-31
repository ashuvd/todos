import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import todoView from './views/todoView.vue'
import todos from './views/todos.vue'

const routes = [
  {
    path: '/',
    component: todos
  },
  {
    path: '/todos/create',
    component: todoView
  },
  {
    path: '/todos/:id',
    component: todoView
  },
];

const router = new VueRouter({ routes, mode: 'history' });

export default router;