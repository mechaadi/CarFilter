<template>
  <div>
    Filter GearBox:
    <select @change="filterGearbox($event)">
      <option value="manual">manual</option>
      <option value="automatic">automatic</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "FilterCars",
  methods: mapActions(["filterGearbox"])
  }

</script>

<style>
select {
  margin-top: 20px;
  padding: 6px;
  border: #41b883 1px solid;
}
</style>
