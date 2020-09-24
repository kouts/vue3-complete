<template>
  <div class="container">
    <h1>Blog</h1>
    <div class="mb-4">
      <h4>Selected tag: {{ currentHashtag ? currentHashtag : '-' }}</h4>
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

    const filteredPosts = computed(() => {
      if (currentHashtag.value !== '') {
        return storeBlog.state.posts.filter(post => post.hashtags.includes(currentHashtag.value));
      }
      return storeBlog.state.posts;
    });

    return {
      filteredPosts,
      currentHashtag
    };
  }
};
</script>
