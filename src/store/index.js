import { createStore } from 'vuex';
import { posts } from './posts';
import { photos } from './photos';
import { albums } from './albums';

export const store = createStore({
  modules: {
    posts,
    photos,
    albums
  }
});
