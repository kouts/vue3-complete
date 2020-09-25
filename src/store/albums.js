export const albums = {
  namespaced: true,
  state() {
    return {
      albums: []
    };
  },
  actions: {
    async fetchAlbums({ commit, state }, id) {
      const response = await window.fetch('https://jsonplaceholder.typicode.com/albums');
      const albums = await response.json();
      commit('SET_ALBUMS', albums);
    }
  },
  mutations: {
    SET_ALBUMS(state, albums) {
      state.albums = albums;
    }
  }
};
