<template>
  <div>
    <h2 class="mb-4">Album photos</h2>
    <div class="row">
      <div class="col d-flex flex-row flex-wrap">
        <div v-for="photo in currentAlbumPhotos" :key="photo.id">
          <img :src="photo.thumbnailUrl" loading="lazy" :alt="photo.title" />
        </div>
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
