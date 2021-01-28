<template>
  <div class="container">
    <header class="navbar columns col-10 col-mx-auto py-2">
      <section class="navbar-section column ml-2">
        <a href="..." class="navbar-brand mr-2">Home{{ totalResults }}</a>
      </section>
      <section class="navbar-section column ml-2">
        <a href="..." class="navbar-brand mr-2"
          >Last refresh time: {{ getLastRefreshTime }}</a
        >
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
      console.log("refreshrate set.");
      store.commit("setRefreshRate", this.refreshRate);
    },
  },
  computed: {
    totalResults: function () {
      return store.state.apiResults["total"];
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
