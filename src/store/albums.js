export const albums = {
  namespaced: true,
  state() {
    return {
      albums: [],
      currentAlbum: {}
    };
  },
  actions: {
    async fetchAlbums({ commit, state }) {
      const response = await window.fetch('https://jsonplaceholder.typicode.com/albums');
      const albums = await response.json();
      commit('SET_ALBUMS', albums);
      return Promise.resolve();
    },
    fetchCurrentAlbum({ commit, state }, id) {
      const album = state.albums.find(album => album.id === Number(id));
      commit('SET_CURRENT_ALBUM', album);
    }
  },
  mutations: {
    SET_ALBUMS(state, albums) {
      state.albums = albums;
    },
    SET_CURRENT_ALBUM(state, album) {
      state.currentAlbum = album;
    }
  }
};
