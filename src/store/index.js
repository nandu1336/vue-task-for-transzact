import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    coinAttributes: ["symbol", "name", "iconUrl", "price", "change", "rank", "marketCap"],
    __apiResults: [],
    apiResults: [],
    refreshRate: 30,
    lastRefreshTime: new Date().toLocaleTimeString().split("(")[0]
  },
  mutations: {
    __setApiResults(state, results) {
      state.__apiResults = results;
      state.apiResults = state.__apiResults;
    },
    setApiResults(state, results) {
      state.apiResults = results
      console.log("len of __apiResutls:", state.__apiResults.length);
    },
    setApiDefaultState(state) {
      state.apiResults = state.__apiResults;
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
