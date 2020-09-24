<template>
  <div class="container">
    <h1>Blog</h1>
    <div class="row mb-4">
      <div class="col-sm-3">
        <input type="text" class="form-control" placeholder="Search posts' content" @input="inputSearch($event)" />
      </div>
      <div class="col-sm-3 d-flex align-items-center">
        <strong>Selected tag:</strong>&nbsp; {{ currentHashtag ? currentHashtag : '-' }}
      </div>
    </div>
    <div class="form-row">
      <div v-for="post in filteredPosts" :key="post.id" class="col-sm-3">
        <card-post class="h-100">
          <template #title>
            {{ post.title }}
          </template>
          <template #content>
            {{ post.content }}
          </template>
          <template #description>
            <card-post-controls :post="post" />
          </template>
        </card-post>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { storeBlog } from '@/store-blog/storeBlog';
import CardPost from '@/components/CardPost';
import CardPostControls from '@/components/CardPostControls';

export default {
  components: {
    CardPost,
    CardPostControls
  },
  setup() {
    const searchText = ref('');

    const inputSearch = (e) => {
      searchText.value = e.target.value;
    };

    const currentHashtag = computed(() => storeBlog.state.currentHashtag);

    const filteredPosts = computed(() => {
      let filtered = storeBlog.state.posts;
      if (currentHashtag.value !== '') {
        filtered = storeBlog.state.posts.filter(post => post.hashtags.includes(currentHashtag.value));
      }
      if (searchText.value !== '') {
        filtered = storeBlog.state.posts.filter(post => post.content.includes(searchText.value));
      }
      return filtered;
    });

    return {
      filteredPosts,
      currentHashtag,
      inputSearch,
      searchText
    };
  }
};
</script>
