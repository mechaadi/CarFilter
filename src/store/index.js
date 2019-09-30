import Vuex from 'vuex';
import Vue from 'vue';
import cars from './modules/cars';

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    cars
  }
});
