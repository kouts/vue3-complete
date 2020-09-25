import { createStore } from 'vuex';
import { posts } from './posts';
import { albums } from './albums';
import { photos } from './photos';

export const store = createStore({
  modules: {
    posts,
    albums,
    photos
  }
});
