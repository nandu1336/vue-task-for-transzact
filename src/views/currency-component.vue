<template>
  <div class="container">
    <div class="columns col-8 mx-2">
      <div class="column col-3 my-2">
        <img :src="imgLink" :alt="currencyName" />
      </div>
      <div class="column col-6">
        <p class="d-inline-block veritcal-close">{{ currencyName }}</p>
        <p class="d-block veritcal-close">{{ currencySmybol }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgLink: {
      type: String,
      requrie: true,
    },
    currencySmybol: {
      type: String,
      require: true,
    },
    currencyName: {
      type: String,
      require: true,
    },
  },
};
</script>

<style scoped>
img {
  height: 25px;
  widows: 25px;
}
.veritcal-close {
  margin-top: 0px;
  margin-bottom: 0px;
  padding: 0px;
}
</style>