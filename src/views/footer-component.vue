<template>
  <div class="container bg-dark">
    <footer class="bg-dark navbar columns col-10 col-mx-auto">
      <section class="navbar-section">
        <span class="label label-primary">
          <a
            href="https://github.com/nandu1336/vue-task-for-transzact"
            class="btn btn-link text-light"
            >goto to github repo</a
          ></span
        >
      </section>
      <section class="navbar-section">
        <span class="label label-primary"
          >CSS Library used:
          <a
            href="https://picturepan2.github.io/spectre/index.html"
            class="btn btn-link text-light"
            >Spectre css</a
          ></span
        >
      </section>
      <section class="navbar-section">
        <span class="label label-primary"
          >Crypto-currency API:
          <a href="https://coinranking.com/" class="btn btn-link text-light"
            >Coinranking</a
          ></span
        >
      </section>
      <section class="navbar-section">
        <span class="label label-primary"
          >Vue Pagination Module:
          <a
            href="https://github.com/cornflourblue/jw-vue-pagination/tree/master/src"
            class="btn btn-link text-light"
            >jw-vue-pagination</a
          ></span
        >
      </section>
    </footer>
  </div>
</template>

<script>
export default {
  name: "footer-component",
};
</script>

<style scope>
footer {
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 2%;
}
</style>