import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import { api } from "./AxiosService"
import Swal from 'sweetalert2'

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
    async editBug({ commit, dispatch }, bugData) {
      try {
        console.log(bugData)

        let res = await api.put("bugs/" + bugData.id, bugData)
        dispatch("getBugById", bugData.id)
      } catch (error) {
        console.error(error);
      }
    },
    async removeBug({ commit, dispatch }, payload) {

      let result = await Swal.fire({
        title: 'Are you sure you want to delete bug?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
          // @ts-ignore
          Swal.fire(
            'Closed!',
            'Your bug has been deleted.',
            'success'
          )
          try {
            let res = api.delete("bugs/" + payload.bugId, payload.creatorEmail);
            dispatch("getBugs")
          } catch (error) {
            console.error(error);
          }
        }
        router.push({ name: "Home" })
      })

    },
    async closeBug({ commit, dispatch }, bug) {
      let result = await Swal.fire({
        title: 'Are you sure you want to close bug?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, close it!'
      }).then((result) => {
        if (result.value) {
          // @ts-ignore
          Swal.fire(
            'Closed!',
            'Your bug has been closed.',
            'success'
          )
          try {

            let res = api.put("bugs/" + bug.bugId, bug);
            dispatch("getBugById", bug.bugId)
            commit("setBugs", bug)

          } catch (error) {
            console.error(error);
          }
          router.push({ name: "Home" })
        }
      })


    },
    async getNotes({ commit, dispatch }, bugId) {

      try {
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
        dispatch("getNotes", note.bugId)
      } catch (error) {
        console.error(error);
      }
    },
    async removeNote({ commit, dispatch }, payload) {

      let result = await Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
          // @ts-ignore
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          try {
            let res = api.delete("notes/" + payload.id)
            commit("setNotes")
            dispatch("getBugById", payload.bugId)
          } catch (error) {
            console.error(error);
          }
        }
      })

    }
  }
});