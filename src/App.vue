<template>
  <heading-component :msg="'Hello world'"></heading-component>
  <canvas-component></canvas-component>
</template>

<script>
import HeadingComponent from "./views/heading-component.vue";
import CanvasComponent from "./views/canvas-component.vue";

export default {
  name: "App",
  components: {
    HeadingComponent,
    CanvasComponent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
</style>
