<template>
  <div>
    Filter Condition:
    <select @change="filterBody($event)">
      <option value="convertible">convertible</option>
      <option value="coupe">coupe</option>
      <option value="sedan">sedan</option>
      <option value="suv">suv</option>

    </select>

    
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "bodyfilter",
  methods: mapActions(["filterBody"])
};
</script>

<style>
select {
  margin-top: 20px;
  padding: 6px;
  border: #41b883 1px solid;
}
</style>
