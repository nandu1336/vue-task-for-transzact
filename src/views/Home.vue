<template>
  <div class="home">
    <heading-component />
    <canvas-component />
    <footer-component />
  </div>
</template>

<script>
import HeadingComponent from "./heading-component.vue";
import CanvasComponent from "./canvas-component.vue";
import FooterComponent from "./footer-component";

export default {
  components: { HeadingComponent, CanvasComponent, FooterComponent },
};
</script>
