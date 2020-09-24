import { reactive } from 'vue';
import { testPosts } from './testPosts';

class Store {
  constructor() {
    this.state = reactive({
      posts: testPosts
    });
  }
};

export const storeBlog = new Store();
