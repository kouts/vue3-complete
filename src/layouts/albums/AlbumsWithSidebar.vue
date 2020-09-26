<template>
  <div>
    <default-nav />
    <div class="container-fluid">
      <div class="row">
        <albums-sidebar />
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
          <slot />
        </main>
      </div>
    </div>
    <default-footer />
  </div>
</template>

<script>
import { watch, reactive } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import DefaultNav from '@/layouts/default/DefaultNav.vue';
import AlbumsSidebar from './AlbumsSidebar.vue';
import DefaultFooter from '@/layouts/default/DefaultFooter.vue';

export default {
  components: {
    DefaultNav,
    AlbumsSidebar,
    DefaultFooter
  },
  setup() {
    const route = reactive(useRoute());
    const store = useStore();
    store.dispatch('albums/fetchAlbums');
    watch(() => route.params, async(newParams, oldParams) => {
      await store.dispatch('photos/fetchPhotosOfAlbum', newParams.id);
      store.dispatch('albums/fetchCurrentAlbum', newParams.id);
    }, {
      immediate: true
    });
  }
};
</script>

<style lang="scss">
  /* Sticky footer */
  html {
    position: relative;
    min-height: 100%;
  }
  body {
    margin-bottom: 60px; /* Margin bottom equal to footer height */
  }
  .footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 60px; /* Footer height */
    line-height: 60px; /* Vertically center the text */
    background-color: $gray-100;
    text-align: center;
  }

  /* Content */
  [role="main"] {
    padding-top: 5em; /* Space for fixed navbar */
  }
</style>
