<template>
  <div class="container bg-dark columns col-10 col-mx-auto my-2">
    <table class="table mx-2">
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
        <tr class="active text-dark">
          <td>The Shawshank Redemption</td>
          <td>Crime, Drama</td>
          <td>14 October 1994</td>
          <td>extra field 1</td>
          <td>extra field 2</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import get_data from "../api/api.js";

export default {
  name: "canvas",
  mounted() {
    console.log("calling get_data in mounted");
    get_data();
  },
};
</script>
