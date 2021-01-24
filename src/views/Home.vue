<template>
  <div class="home">
    <heading-component />
    <canvas-component />
  </div>
</template>

<script>
import HeadingComponent from "./heading-component.vue";
import CanvasComponent from "./canvas-component.vue";

export default {
  components: { HeadingComponent, CanvasComponent },
};
</script>
