import { delay } from '@/common/utils';

export const photos = {
  namespaced: true,
  state() {
    return {
      currentAlbumPhotos: [],
      loading: false
    };
  },
  actions: {
    async fetchPhotosOfAlbum({ commit, state }, albumId) {
      if (!albumId) {
        return;
      }
      commit('SET_LOADING', true);
      await delay(1500);
      const response = await window.fetch('https://jsonplaceholder.typicode.com/photos?albumId=' + albumId);
      const photos = await response.json();
      commit('SET_PHOTOS_OF_ALBUM', photos);
      commit('SET_LOADING', false);
    }
  },
  mutations: {
    SET_PHOTOS_OF_ALBUM(state, photos) {
      state.currentAlbumPhotos = photos;
    },
    SET_LOADING(state, value) {
      state.loading = value;
    }
  }
};
