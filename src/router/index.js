import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';

const history = createWebHashHistory();
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      layout: 'default'
    }
  },
  {
    path: '/form',
    name: 'Form',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "form" */ '../views/Form.vue'),
    meta: {
      layout: 'default'
    }
  }
];
const router = createRouter({
  linkActiveClass: 'active',
  history,
  routes
});

export { router };
