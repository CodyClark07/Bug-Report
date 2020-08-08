import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import { api } from "./AxiosService"

Vue.use(Vuex);



export default new Vuex.Store({
  state: {
    profile: {},
    bugs: [],
    activeBug: {},
    notes: []
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setBugs(state, bug) {
      state.bugs = bug
    }
  },
  actions: {
    setBearer({ }, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async getProfile({ commit }) {
      try {
        let res = await api.get("profile");
        commit("setProfile", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getBugs({ commit, dispatch }) {
      try {
        let res = await api.get("bugs")
        console.log(res.data.data)
        commit("setBugs", res.data.data)
      } catch (error) {
        console.error(error);
      }
    },
    async addBug({ commit, dispatch }, bug) {
      try {
        let res = await api.post("bugs", bug)
        console.log(res.data)
        dispatch("getBugs")
      } catch (error) {
        console.error(error);
      }
    }
  }
});
