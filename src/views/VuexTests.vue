
<template>
  <div class="container">
    <h1 class="mb-4">Vuex tests</h1>
    <div class="row mb-4">
      <div class="col">
        <button
          v-for="post in posts"
          :key="post.id"
          type="button"
          :class="['btn mr-2', post.id === (currentPost && currentPost.id) ? 'btn-primary' : 'btn-secondary']"
          @click="fetchPost(post.id)"
        >
          {{ post.title }}
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div v-if="loadingPosts" class="text-center">
          Loading...
        </div>
        <div v-if="currentPost && !loadingPosts">
          <h2>{{ currentPost.title }}</h2>
          <p>
            {{ currentPost.content }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const posts = computed(() => store.state.posts.posts);
    const currentPost = computed(() => store.state.posts.currentPost);
    const loadingPosts = computed(() => store.state.posts.loadingPosts);

    const fetchPost = (id) => {
      store.dispatch('posts/fetchPost', id);
    };

    return {
      posts,
      currentPost,
      fetchPost,
      loadingPosts
    };
  }
};
</script>
