<template>
  <div>
    <h3>CAR FILTER</h3>
  
    <div class="cars">
      <div
        v-for="car in allCars"
        :key="car.id"
        class="car"
        v-bind:class="{'is-complete':car.completed}"
      >
        {{ car.title }}
        <br/>
        Transmission :  {{car.gearbox_name}}
         <br/>
        Condition : {{car.condition_code}}
        <br/>
        body : {{car.body_codes[0]}}
        </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Cars",
  methods: {
    ...mapActions(["fetchCars"]),
  
  },
  computed: mapGetters(["allCars"]),
  created() {
    this.fetchCars();
  }
};
</script>

<style scoped>
.cars {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}

.car {
  border: 1px solid #ccc;
  background: #e91e63;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}

i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}

.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}

.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
}

.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b883;
}

.is-complete {
  background: #35495e;
  color: #fff;
}

@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>
