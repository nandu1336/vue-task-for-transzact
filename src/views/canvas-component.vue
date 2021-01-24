
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
            <img v-if="index == 2" :src="item[attribute]" />
            <span v-else>{{ item[attribute] }}</span>
          </td>
        </tr>
      </tbody>
    </table>
    <jw-vue-pagination
      class="column"
      :items="apiResults"
      :pageSize="getPageSize"
      @changePage="onChangePage"
    ></jw-vue-pagination>

    <ul class="step my-2">
      <li class="step-item">
        <a
          class="text-light bg-dark tooltip"
          data-tooltip="5"
          :value="5"
          @click.prevent="pageSizezChanged(5)"
        >
          show 5 rows/page
        </a>
      </li>
      <li class="step-item">
        <a
          class="text-light tooltip"
          data-tooltip="10"
          :value="10"
          @click.prevent="pageSizezChanged(10)"
          >show 10 rows/page</a
        >
      </li>
      <li class="step-item">
        <a
          class="text-light tooltip"
          data-tooltip="15"
          :value="15"
          @click.prevent="pageSizezChanged(15)"
          >show 15 rows/page</a
        >
      </li>
      <li class="step-item">
        <a
          class="text-light tooltip"
          data-tooltip="20"
          :value="20"
          @click.prevent="pageSizezChanged(20)"
          >show 20 rows/page</a
        >
      </li>
    </ul>
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
      pageSize: 10,
      pageOfItems: [],
    };
  },
  methods: {
    pageSizezChanged(e) {
      console.log("setPageSize is called with value :", e);
      console.log("type of value  :", typeof e);
      this.pageSize = e;
    },
    onChangePage(changedPages) {
      this.pageOfItems = changedPages;
    },
  },
  computed: {
    getPageSize: function () {
      return this.pageSize;
    },
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