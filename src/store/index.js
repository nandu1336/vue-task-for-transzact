import { createStore } from "vuex";

export default createStore({
  state: {
    coinAttributes: ["symbol", "name", "iconUrl", "price", "change"],
    apiResults: [],
  },
  mutations: {
    setApiResults(state, results) {
      state.apiResults = results;
    },
  },
  actions: {},
  modules: {}
});
