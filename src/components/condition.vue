<template>
  <div>
    Filter Condition:
    <select @change="filterCondition($event)">
      <option value="new">new</option>
      <option value="used">used</option>
    </select>

    
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "condition",
  methods: mapActions(["filterCondition"])
};
</script>

<style>
select {
  margin-top: 20px;
  padding: 6px;
  border: #41b883 1px solid;
}
</style>
