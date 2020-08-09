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
    setBugs(state, bugs) {
      state.bugs = bugs
    },
    setActiveBug(state, bug) {
      state.activeBug = bug
    },
    setNotes(state, notes) {
      state.notes = notes
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
    async getBugById({ commit, dispatch }, bugId) {

      try {
        let res = await api.get("bugs/" + bugId)
        commit("setActiveBug", res.data)
      } catch (error) {
        console.error(error);
      }
    },
    async addBug({ commit, dispatch }, bug) {
      try {
        let res = await api.post("bugs", bug)
        console.log(res.data)
        dispatch("getBugs")
        router.push({ name: "bug-info", params: { id: res.data.data.id } })

      } catch (error) {
        console.error(error);
      }
    },
    async closeBug({ commit, dispatch }, bug) {

      try {
        let res = await api.put("bugs/" + bug.bugId, bug);
        dispatch("getBugById", bug.bugId)
        dispatch("getBugs")
      } catch (error) {
        console.error(error);
      }
    },
    async getNotes({ commit, dispatch }, bugId) {
      try {
        debugger
        let res = await api.get("bugs/" + bugId + "/notes")
        commit("setNotes", res.data)
      } catch (error) {
        console.error(error);
      }
    },
    async addNote({ commit, dispatch }, note) {
      try {
        let res = await api.post("notes", note)
        console.log(res.data)
        dispatch("getNotes")
      } catch (error) {
        console.error(error);
      }
    }
  }
});
