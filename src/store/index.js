import { createStore } from "vuex";

export default createStore({
  state: {
    coinAttributes: ["symbol", "name", "iconUrl", "price", "change"],
    apiResults: [],
    refreshRate: 5,
  },
  mutations: {
    setApiResults(state, results) {
      state.apiResults = results;
    },
  },
  actions: {},
  modules: {}
});
