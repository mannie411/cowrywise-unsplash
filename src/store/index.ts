import { createStore } from "vuex";

export default createStore({
  state: {
    photoModal: false,
  },
  mutations: {
    TOOGLE_PHOTOMODAL(state) {
      state.photoModal = !state.photoModal;
    },
  },
  actions: {},
  modules: {},
});
