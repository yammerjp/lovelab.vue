import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [
      {
        id: 0,
        name: 'ゴミ出し(もえるごみ)',
        isFinished: false,
        updatedTimeStamp: 1573482935,
      },
      {
        id: 1,
        name: 'ゴミ出し(もえないごみ)',
        isFinished: true,
        updatedTimeStamp: 1573482936,
      },
    ],
  },
  getters: {
    tasks(state) {
      return state.tasks;
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
