<template>
  <div class="home">
    <button class="btn btn-outline-warning" @click="inputVisible = !inputVisible">Report Bug</button>

    <form v-if="inputVisible" @submit.prevent="addBug()">
      <div class="form-group">
        <label for="title"></label>
        <input
          type="text"
          class="form-control"
          id="title"
          placeholder="Enter Title Here..."
          v-model="newBug.title"
        />
      </div>
      <div class="form-group">
        <label for="description"></label>
        <input
          type="text"
          class="form-control"
          id="description"
          placeholder="Enter Description Here..."
          v-model="newBug.description"
        />
      </div>
      <!-- <div class="form-group">
        <label for="name"></label>
        <input
          type="text"
          class="form-control"
          id="name"
          placeholder="Enter Name Here..."
          v-model="newBug.name"
        />
      </div>-->
      <button class="btn btn-outline-success" type="submit">Confirm</button>
    </form>

    <table class="table">
      <tr>
        <th>
          <u>Title</u>
        </th>
        <th>
          <u>Reported By</u>
        </th>
        <th>
          <u>Status</u>
        </th>
        <th>
          <u>Last Updated</u>
        </th>
      </tr>
      <bug v-for="bug in bugs" :bugData="bug" :key="bug.id" />
    </table>
  </div>
</template>

<script>
import Bug from "../components/Bug";
export default {
  name: "home",
  mounted() {
    this.$store.dispatch("getProfile");

    this.$store.dispatch("getBugs");
  },
  data() {
    return {
      newBug: {},
      inputVisible: false,
    };
  },
  methods: {
    addBug() {
      this.$store.dispatch("addBug", {
        title: this.newBug.title,
        description: this.newBug.description,
        creatorEmail: this.$auth.userInfo.email,
      });
      this.newBug = { title: "", description: "" };
    },
  },
  computed: {
    bugs() {
      return this.$store.state.bugs;
    },
  },
  components: {
    Bug,
  },
};
</script>
