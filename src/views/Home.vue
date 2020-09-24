<template>
  <div class="container">
    <h1 class="mb-4">Blog</h1>
    <div class="row">
      <div v-for="post in storeBlog.state.posts" :key="post.id" class="col-sm-3">
        <card-post>
          <template #title>
            {{ post.title }}
          </template>
          <template #content>
            {{ post.title }}
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
import { storeBlog } from '@/store-blog/storeBlog';
import CardPost from '@/components/CardPost';
import CardPostControls from '@/components/CardPostControls';

export default {
  components: {
    CardPost,
    CardPostControls
  },
  setup() {
    return {
      storeBlog
    };
  }
};
</script>
