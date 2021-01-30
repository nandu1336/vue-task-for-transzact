<template>
  <div class="container bg-dark">
    <header class="navbar columns col-10 col-mx-auto py-2">
      <section class="navbar-section column ml-2">
        <span class="navbar-brand mr-2"
          >Total Results:{{ getTotalResults }}</span
        >
      </section>
      <section class="navbar-section column ml-2">
        <input
          type="text"
          placeholder="search by currency name"
          class="form-input navbar-brand mr-2"
          v-model="searchInput"
        />
      </section>
      <section class="navbar-section column ml-2">
        <span class="navbar-brand mr-2"
          >Last refresh time: {{ getLastRefreshTime }}</span
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
      searchInput: "",
    };
  },
  methods: {
    setCustomRefreshRate() {
      console.log("refreshrate set.");
      store.commit("setRefreshRate", this.refreshRate);
    },
  },
  computed: {
    getTotalResults: function () {
      return store.state.apiResults.length;
    },
    getLastRefreshTime: function () {
      return store.state.lastRefreshTime;
    },
  },
  watch: {
    searchInput: function () {
      if (this.searchInput == "") {
        return store.commit("setApiDefaultState");
      }
      let temp = store.state.__apiResults.filter((currency) => {
        let name = currency.name.toLowerCase();
        let value = this.searchInput.toLowerCase();
        return name.startsWith(value);
      });
      store.commit("setApiResults", temp);
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
