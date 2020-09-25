<template>
  <div>
    <h1 class="mb-4">Home</h1>
    <div class="row">
      <div v-for="photo in currentAlbumPhotos" :key="photo.id" class="col-sm-2">
        <img :src="photo.thumbnailUrl" loading="lazy" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  setup() {
    const store = useStore();
    const currentAlbumPhotos = computed(() => store.state.photos.currentAlbumPhotos);
    return {
      currentAlbumPhotos
    };
  }
};
</script>
