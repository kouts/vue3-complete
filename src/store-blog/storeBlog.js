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

  incrementLike(post) {
    const thePost = this.state.posts.find(item => item.id === post.id);
    thePost.likes = thePost.likes + 1;
  }
};

export const storeBlog = new Store();
