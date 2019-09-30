<template>
  <div>
    Filter Condition:
    <button @click="filterCars()">
        FILTER
    </button>

    
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "filterbutton",
  methods: mapActions(["filterCars"])
};
</script>

<style>
select {
  margin-top: 20px;
  padding: 6px;
  border: #41b883 1px solid;
}
</style>
