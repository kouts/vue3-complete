export const photos = {
  namespaced: true,
  state() {
    return {
      currentAlbumPhotos: []
    };
  },
  actions: {
    async fetchPhotosOfAlbum({ commit, state }, albumId) {
      const response = await window.fetch('https://jsonplaceholder.typicode.com/photos?albumId=' + albumId);
      const photos = await response.json();
      commit('SET_PHOTOS_OF_ALBUM', photos);
    }
  },
  mutations: {
    SET_PHOTOS_OF_ALBUM(state, photos) {
      state.currentAlbumPhotos = photos;
    }
  }
};
