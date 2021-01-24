<template>
  <div class="container bg-dark">
    <header class="navbar columns col-10 col-mx-auto py-2">
      <section class="navbar-section column ml-2">
        <a href="..." class="navbar-brand text-light mr-2">Home</a>
        <!-- <a href="..." class="btn btn-link text-light">Docs</a> -->
      </section>
      <section class="navbar-section column col-4 mr-2">
        <div class="input-group input-inline">
          <!-- <input class="form-input" type="text" placeholder="search" /> -->
          <div class="input-group input-inline">
            <input type="text" v-model="refreshRate" placeholder="search" />
            <button class="btn btn-light text-dark input-group-btn">
              save
            </button>
          </div>
          <!-- <button class="btn btn-light text-dark input-group-btn">
            Search
          </button> -->
        </div>
      </section>
    </header>
  </div>
</template>

<script>
export default {
  name: "heading",
  props: {
    msg: String,
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
