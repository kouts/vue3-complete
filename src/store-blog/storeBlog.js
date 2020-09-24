import { reactive, computed } from 'vue';
import { testPosts } from './testPosts';

class Store {
  constructor() {
    this.state = reactive({
      posts: testPosts,
      currentHashtag: '',
      searchText: ''
    });
  }

  get filteredPosts() {
    return computed(() => {
      let filtered = this.state.posts;
      if (this.state.currentHashtag !== '') {
        filtered = this.state.posts.filter(post => post.hashtags.includes(this.state.currentHashtag));
      }
      if (this.state.searchText !== '') {
        filtered = this.state.posts.filter(post => post.content.includes(this.state.searchText));
      }
      return filtered;
    });
  }

  setSearchText(searchText) {
    this.state.searchText = searchText;
  };

  setHashtag(hashtag) {
    this.state.currentHashtag = hashtag;
  };

  incrementLike(post) {
    const thePost = this.state.posts.find(item => item.id === post.id);
    thePost.likes = thePost.likes + 1;
  }
};

export const storeBlog = new Store();
