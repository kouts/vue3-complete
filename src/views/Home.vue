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
import { computed } from 'vue';
import { storeBlog } from '@/store-blog/storeBlog';
import CardPost from '@/components/CardPost';
import CardPostControls from '@/components/CardPostControls';

export default {
  components: {
    CardPost,
    CardPostControls
  },
  setup() {
    const currentHashtag = computed(() => storeBlog.state.currentHashtag);
    const inputSearch = (e) => {
      storeBlog.setSearchText(e.target.value);
    };
    return {
      filteredPosts: storeBlog.filteredPosts,
      currentHashtag,
      inputSearch
    };
  }
};
</script>
