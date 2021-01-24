
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
          <td v-for="(attribute, index) in coinAttributes" :key="attribute">
            <img
              v-if="index == 2"
              :src="item[attribute]"
              style="margin-left: 40px"
            />
            <span v-else-if="index == 3"
              >{{ getDollars(item[attribute]) }}
            </span>
            <span v-else-if="index == 4">{{
              getChangePercentage(item[attribute])
            }}</span>
            <span v-else>{{ item[attribute] }}</span>
          </td>
        </tr>
      </tbody>
    </table>
    <jw-vue-pagination
      class="column"
      :items="apiResults"
      @changePage="onChangePage"
    ></jw-vue-pagination>
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
    get_data();
  },
  data() {
    return {
      pageOfItems: [],
    };
  },
  methods: {
    onChangePage(changedPages) {
      this.pageOfItems = changedPages;
    },
    getDollars(dollars) {
      let dotIndex = dollars.indexOf(".");
      if (dotIndex != -1) {
        return dollars.substring(0, dotIndex + 3) + " $";
      }
      return dollars + " $";
    },
    getChangePercentage(change) {
      let dotIndex = change.indexOf(".");
      if (dotIndex != -1) {
        return change.substring(0, dotIndex + 3) + " %";
      }
      return change + " %";
    },
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
};
</script>

<style scoped>
img {
  width: 30px;
  height: 30px;
}
</style>