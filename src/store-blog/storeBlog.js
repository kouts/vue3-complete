import { reactive } from 'vue';
import { testPosts } from './testPosts';

class Store {
  constructor() {
    this.state = reactive({
      posts: testPosts,
      currentHashtag: ''
    });
  }

  setHashtag(hashtag) {
    this.state.currentHashtag = hashtag;
  };
};

export const storeBlog = new Store();
