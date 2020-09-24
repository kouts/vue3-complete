<template>
  <div class="container">
    <h1>Posts</h1>
    <div class="row mb-4">
      <div class="col-sm-3">
        <input type="text" class="form-control" placeholder="Search posts' content" @input="inputSearch($event)" />
      </div>
      <div class="col-sm-3 d-flex align-items-center">
        <strong>Selected tag:</strong>&nbsp; {{ currentHashtag ? currentHashtag : '-' }}
      </div>
    </div>
    <div class="row">
      <div class="col-sm-7">
        <div class="form-row">
          <div v-for="post in filteredPosts" :key="post.id" class="col-sm-6 mb-2">
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
      <div class="col-sm-5">
        <div class="row">
          <router-view class="col"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { computed, watchEffect } from 'vue';
import { storeBlog } from '@/store-blog/storeBlog';
import CardPost from '@/components/CardPost';
import CardPostControls from '@/components/CardPostControls';

export default {
  components: {
    CardPost,
    CardPostControls
  },
  setup() {
    const route = useRoute();
    const currentHashtag = computed(() => storeBlog.state.currentHashtag);
    const inputSearch = (e) => {
      storeBlog.setSearchText(e.target.value);
    };

    watchEffect(() => {
      console.log(route.params);
    });

    return {
      filteredPosts: storeBlog.filteredPosts,
      currentHashtag,
      inputSearch
    };
  }
};
</script>
