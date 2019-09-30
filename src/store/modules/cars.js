import axios from 'axios';

const state = {
  cars: [],
  condition:"new",
  gearbox_name:"manual",
  body:"convertible"
};

const getters = {
  allCars: state => state.cars

};

const actions = {
  async fetchCars({ commit }) {
    const response = await axios.get(
      'https://dms.automix.com/api/v1/it/vehicles'
    );
    console.log(response.data['data']);
    commit('setCars', response.data['data']);
  },
  
  async filterCars({ commit }) {
      console.log(state.condition, state.gearbox_name, state.body);
      if (state.condition != ""){
        const response = await axios.get(
          `https://dms.automix.com/api/v1/it/vehicles?filter[condition]=${state.condition}&filter[transmission]=${state.gearbox_name}&filter[body]=${state.body}`
        );
        console.log(response.data['data']);
        commit('setCars', response.data['data']);
      }
   
  },

  async filterCondition({commit}, condition){
    console.log(condition.target.options[condition.target.options.selectedIndex].innerText);
    commit('setCondition', condition.target.options[condition.target.options.selectedIndex].innerText)
  },
  

  async filterBody({commit}, body){
    console.log(body.target.options[body.target.options.selectedIndex].innerText);
    commit('setBody', body.target.options[body.target.options.selectedIndex].innerText)

  
  },

  async filterGearbox({commit}, gearbox_name){
    console.log(gearbox_name.target.options[gearbox_name.target.options.selectedIndex].innerText);
    commit('setGearbox', gearbox_name.target.options[gearbox_name.target.options.selectedIndex].innerText)
  
  
  },

};

const mutations = {
  setCars: (state, cars) => (state.cars = cars),
  setCondition : (state, condition)=>(state.condition = condition),
  setGearbox : (state, gearbox_name)=>(state.gearbox_name = gearbox_name),
  setBody : (state, body)=>(state.body = body)

};

export default {
  state,
  getters,
  actions,
  mutations
};
