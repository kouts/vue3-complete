<template>
  <nav class="col-md-2 d-none d-md-block sidebar">
    <div class="sidebar-sticky">
      <ul class="nav flex-column">
        <!--
        <li class="nav-item">
          <a class="nav-link active" href="#">
            Link 1
          </a>
        </li>
        -->
        <albums-sidebar-link
          v-for="album in albums"
          :id="album.id"
          :key="album.id"
          :user-id="album.userId"
          :title="album.title"
          :active="active(album.id)"
          class="nav-item"
          @click="albumClicked"
        />
      </ul>
    </div>
  </nav>
</template>

<script>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

import AlbumsSidebarLink from './AlbumsSidebarLink.vue';

export default {
  components: {
    AlbumsSidebarLink
  },
  setup() {
    const router = useRouter();
    const store = useStore();
    const albums = computed(() => store.state.albums.albums);
    const active = (albumId) => {
      if (store.state.albums.currentAlbum && store.state.albums.currentAlbum.id === albumId) {
        return true;
      }
      return false;
    };

    const albumClicked = (albumId) => {
      router.push({ name: 'AlbumPhotos', params: { id: albumId } });
    };

    return {
      albums,
      albumClicked,
      active
    };
  }
};
</script>

<style lang="scss" scoped>
  /* Sidebar */
  .sidebar {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 100; /* Behind the navbar */
    padding: 56px 0 0; /* Height of navbar */
    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
    background-color: lighten($gray-200, 3%);
  }
  .sidebar-sticky {
    position: relative;
    top: 0;
    height: calc(100vh - 56px);
    // padding-top: .5rem;
    overflow-x: hidden;
    overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
  }
  @supports ((position: -webkit-sticky) or (position: sticky)) {
    .sidebar-sticky {
      position: -webkit-sticky;
      position: sticky;
    }
  }
  .sidebar-heading {
    font-size: .75rem;
    text-transform: uppercase;
  }
</style>
