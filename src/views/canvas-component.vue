
<template>
  <div class="container bg-dark columns col-10 col-mx-auto my-2 py-2">
    <table v-if="isResultsAvailable" class="table mx-2 my-2 py-2">
      <thead>
        <tr>
          <th>Currency Icon</th>
          <th>Currency Name</th>
          <th>Currency Symbol</th>
          <th>Currency Price</th>
          <th>Currency Price Change</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in pageOfItems" :key="item">
          <td v-for="attribute in coinAttributes" :key="attribute">
            {{ item[attribute] }}
          </td>
        </tr>
      </tbody>
    </table>
    <div class="columns">
      <jw-vue-pagination
        class="column"
        :items="apiResults"
        @changePage="onChangePage"
      ></jw-vue-pagination>
    </div>
  </div>
</template>

<script>
import get_data from "../api/api.js";
import store from "../store/index.js";
import JwVuePagination from "./pagination/jw-vue-pagination.vue";

export default {
  name: "canvas",
  components: { JwVuePagination },
  mounted() {
    console.log("calling get_data in mounted");
    get_data();
  },
  data() {
    return {
      pageOfItems: [],
    };
  },
  computed: {
    isResultsAvailable: function () {
      return this.apiResults.length == 0 ? false : true;
    },
    coinAttributes: function () {
      return store.state.coinAttributes;
    },
    apiResults: function () {
      return store.state.apiResults;
    },
  },
  methods: {
    onChangePage(changedPages) {
      this.pageOfItems = changedPages;
    },
  },
};
</script>
