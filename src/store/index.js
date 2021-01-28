import { createStore } from "vuex";

export default createStore({
  state: {
    coinAttributes: ["symbol", "name", "iconUrl", "price", "change", "rank", "marketCap"],
    apiResults: [],
    refreshRate: 5,
    lastRefreshTime: 0
  },
  mutations: {
    setApiResults(state, results) {
      state.apiResults = results;
    },
    setRefreshRate(state, newRefreshRate) {
      state.refreshRate = newRefreshRate;
    },
    setLastRefreshTime(state, newRefreshTime) {
      state.lastRefreshTime = newRefreshTime;
    }
  },
  getters: {
    getRefreshRate(state) {
      return state.refreshRate;
    }
  },
  actions: {},
  modules: {}
});
