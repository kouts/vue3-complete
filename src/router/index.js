import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';

const history = createWebHashHistory();
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      layout: 'default',
      showInNavbar: true
    }
  },
  {
    path: '/form',
    name: 'Form',
    component: () => import(/* webpackChunkName: "form" */ '../views/Form.vue'),
    meta: {
      layout: 'default',
      showInNavbar: true
    }
  },
  {
    path: '/pokemons',
    name: 'Pokemons',
    component: () => import(/* webpackChunkName: "pokemons" */ '../views/Pokemons.vue'),
    meta: {
      layout: 'default',
      showInNavbar: true
    }
  },
  {
    path: '/numbers',
    name: 'Numbers',
    component: () => import(/* webpackChunkName: "numbers" */ '../views/Numbers.vue'),
    meta: {
      layout: 'default',
      showInNavbar: true
    }
  },
  {
    path: '/posts',
    name: 'Posts',
    component: () => import(/* webpackChunkName: "posts" */ '../views/Posts.vue'),
    meta: {
      layout: 'default',
      showInNavbar: true
    },
    children: [
      {
        path: ':id',
        name: 'Post',
        component: () => import(/* webpackChunkName: "post" */ '../views/Post.vue'),
        meta: {
          showInNavbar: false
        }
      }
    ]
  },
  {
    path: '/vuex-tests',
    name: 'VuexTests',
    component: () => import(/* webpackChunkName: "vuex-tests" */ '../views/VuexTests.vue'),
    meta: {
      layout: 'default',
      showInNavbar: true
    }
  },
  {
    path: '/albums',
    name: 'Albums',
    component: () => import(/* webpackChunkName: "albums" */ '../views/Album.vue'),
    meta: {
      layout: 'albums-with-sidebar',
      showInNavbar: true
    },
    children: [
      {
        path: ':id',
        name: 'AlbumPhotos',
        component: () => import(/* webpackChunkName: "album-photos" */ '../views/AlbumPhotos.vue'),
        meta: {
          showInNavbar: false
        }
      }
    ]
  }
];
const router = createRouter({
  linkActiveClass: 'active',
  history,
  routes
});

export { router };
