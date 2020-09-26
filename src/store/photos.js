import { delay } from '@/common/utils';

export const photos = {
  namespaced: true,
  state() {
    return {
      currentAlbumPhotos: [],
      loading: false,
      photoCache: {}
    };
  },
  actions: {
    async fetchPhotosOfAlbum({ commit, state }, albumId) {
      if (!albumId) {
        return;
      }
      if (state.photoCache[albumId]) {
        commit('SET_PHOTOS_OF_ALBUM', { photos: state.photoCache[albumId], albumId });
        return;
      }
      commit('SET_LOADING', true);
      await delay(1500);
      const response = await window.fetch('https://jsonplaceholder.typicode.com/photos?albumId=' + albumId);
      const photos = await response.json();
      commit('SET_PHOTOS_OF_ALBUM', { photos, albumId });
      commit('SET_LOADING', false);
    }
  },
  mutations: {
    SET_PHOTOS_OF_ALBUM(state, { photos, albumId }) {
      state.currentAlbumPhotos = photos;
      state.photoCache[albumId] = photos;
    },
    SET_LOADING(state, value) {
      state.loading = value;
    }
  }
};
