<template>
  <div>
    <div v-if="!loading && (!currentAlbum || !currentAlbum.title)">
      <h1>No album selected</h1>
      <p>Select an album from the left to view it's details...</p>
    </div>
    <div v-if="loading">
      Loading ...
    </div>
    <template v-if="!loading && currentAlbum && currentAlbum.title">
      <h1 class="mb-0">Album</h1>
      <p>{{ currentAlbum.title }}</p>
      <router-view />
    </template>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const currentAlbum = computed(() => store.state.albums.currentAlbum);
    const loading = computed(() => store.state.photos.loading);
    return {
      currentAlbum,
      loading
    };
  }
};
</script>
