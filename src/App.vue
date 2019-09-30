<template>
  <div id="app">
    <div class="container">
    
      <FilterCars/>
      <condition/>
            <bodyfilter/>

      <filterbtn/>
      <Cars/>
    </div>
  </div>
</template>

<script>
import Cars from "./components/Cars.vue";
import  FilterCars from "./components/FilterCars.vue";
import condition from "./components/condition.vue";
import filterbtn from "./components/filterbutton";
import bodyfilter from "./components/bodyfilter";

export default {
  name: "app",
  components: {
    Cars,
    FilterCars,
    condition,
    filterbtn,
    bodyfilter
  }
};
</script>

<style>
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
