
<template>
  <div class="container columns col-10 col-mx-auto my-2 py-2">
    <table v-if="isResultsAvailable" class="table mx-2 my-2 py-2">
      <thead>
        <tr>
          <th>Cryptocurrency</th>
          <th>Price</th>
          <th>Price Change</th>
          <th>Rank</th>
          <th>Market Cap</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in pageOfItems" :key="item">
          <td>
            <currency-component
              :imgLink="item['iconUrl']"
              :currencyName="item['name']"
              :currencySmybol="item['symbol']"
            ></currency-component>
          </td>
          <td v-for="attribute in coinAttributes" :key="attribute">
            <span> {{ getValueForThisColumn(item, attribute) }}</span>
          </td>
        </tr>
      </tbody>
    </table>
    <jw-vue-pagination
      :items="apiResults"
      @changePage="onChangePage"
    ></jw-vue-pagination>
  </div>
</template>

<script>
import get_data from "../api/api.js";
import store from "../store/index.js";
import JwVuePagination from "./pagination/jw-vue-pagination.vue";
import CurrencyComponent from "./currency-component";

export default {
  name: "canvas-component",
  components: { JwVuePagination, CurrencyComponent },
  mounted() {
    get_data();
  },
  data() {
    return {
      pageOfItems: [],
      currencyComponentProps: ["iconUrl", "symbol", "name"],
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
    isInCurrencyComponent(attribute) {
      return this.currencyComponentProps.lastIndexOf(attribute) >= 0
        ? true
        : false;
    },
    getValueForThisColumn(item, attribute) {
      if (attribute == "price") {
        return this.getDollars(item[attribute]);
      } else if (attribute == "change") {
        return this.getChangePercentage(item[attribute]);
      } else if (attribute == "marketCap") {
        return parseInt(item[attribute]) / 1000000000 + " - Billions";
      } else return item[attribute];
    },
  },
  computed: {
    isResultsAvailable: function () {
      return this.apiResults.length == 0 ? false : true;
    },
    coinAttributes: function () {
      return store.state.coinAttributes.filter(
        (attribute) => !this.isInCurrencyComponent(attribute)
      );
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