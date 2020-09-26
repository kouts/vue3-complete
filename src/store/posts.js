import { testPosts } from '@/store-blog/testPosts';
import { delay } from '@/common/utils';

export const posts = {
  namespaced: true,
  state() {
    return {
      posts: testPosts,
      currentPost: null,
      loadingPosts: false
    };
  },
  actions: {
    async fetchPost({ commit, state }, id) {
      commit('SET_LOADING_POSTS', true);
      await delay(1000);
      const post = state.posts.find(item => item.id === id);
      commit('SET_POST', post);
      commit('SET_LOADING_POSTS', false);
    }
  },
  mutations: {
    SET_POST(state, post) {
      state.currentPost = post;
    },
    SET_LOADING_POSTS(state, value) {
      state.loadingPosts = value;
    }
  }
};
