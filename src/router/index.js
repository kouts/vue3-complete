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
    component: () => import(/* webpackChunkName: "form" */ '../views/Form.vue'),
    meta: {
      layout: 'default'
    }
  },
  {
    path: '/pokemons',
    name: 'Pokemons',
    component: () => import(/* webpackChunkName: "pokemons" */ '../views/Pokemons.vue'),
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
