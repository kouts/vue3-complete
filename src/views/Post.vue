<template>
  <div>
    <h3>{{ post.title }}</h3>
    <p>{{ post.contentDetails }}</p>
  </div>
</template>

<script>
import { computed } from 'vue';
import { storeBlog } from '@/store-blog/storeBlog';
import { useRoute } from 'vue-router';

export default {
  setup() {
    const route = useRoute();
    const post = computed(() => storeBlog.state.posts.filter(item => item.id === Number(route.params.id))[0]);
    return {
      post
    };
  }
};
</script>

<style>

</style>
