<template>
  <div class="container bg-dark">
    <header class="navbar columns col-10 col-mx-auto py-2">
      <section class="navbar-section column ml-2">
        <a href="..." class="navbar-brand text-light mr-2"
          >Total Results:{{ totalResults }}</a
        >
      </section>
      <section class="navbar-section column ml-2">
        <a href="..." class="navbar-brand text-light mr-2"
          >Last refresh time: {{ getLastRefreshTime }}</a
        >
      </section>
      <section class="navbar-section column col-4 mr-2">
        <div class="input-group input-inline">
          <input
            type="text"
            v-model="refreshRate"
            placeholder="set refresh rate in seconds."
          />
          <button
            class="btn bg-dark text-light input-group-btn"
            @click="setCustomRefreshRate()"
          >
            save
          </button>
        </div>
      </section>
    </header>
  </div>
</template>

<script>
import store from "../store/index.js";

export default {
  name: "heading",
  props: {
    msg: String,
  },
  data() {
    return {
      refreshRate: "",
    };
  },
  methods: {
    setCustomRefreshRate() {
      store.commit("setRefreshRate", this.refreshRate);
    },
  },
  computed: {
    totalResults: function () {
      return store.state.apiResults.length;
    },
    getLastRefreshTime: function () {
      return store.state.lastRefreshTime;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
