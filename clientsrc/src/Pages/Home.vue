<template>
  <div class="home text-align-center">
    <button
      class="btn btn-sm btn-outline-warning mt-5 mb-2"
      @click="inputVisible = !inputVisible"
    >Report Bug</button>

    <form v-if="inputVisible" @submit.prevent="addBug()" class="mb-5">
      <div class="form-group">
        <label for="title"></label>
        <input
          type="text"
          class="form-control w-25"
          id="title"
          placeholder="Enter Title Here..."
          v-model="newBug.title"
        />
      </div>
      <div class="form-group">
        <label for="description"></label>
        <input
          type="text"
          class="form-control w-50"
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

    <table id="bugTable" class="table text-center">
      <tr>
        <th @click="sortTable(0)">
          <u>Title</u>
        </th>
        <th @click="sortTable(1)">
          <u>Reported By</u>
        </th>
        <th @click="sortTable(2)">
          <u>Status</u>
        </th>
        <th @click="sortTable(3)">
          <u>Last Updated</u>
        </th>
      </tr>
      <bugs v-for="bug in bugs" :bugData="bug" :key="bug.id" />
    </table>
  </div>
</template>

<script>
import Bugs from "../components/Bug";
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
    sortTable(n) {
      let table,
        rows,
        switching,
        i,
        x,
        y,
        shouldSwitch,
        dir,
        switchcount = 0;
      table = document.getElementById("bugTable");
      switching = true;
      dir = "asc";
      while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < rows.length - 1; i++) {
          shouldSwitch = false;
          x = rows[i].getElementsByTagName("TD")[n];
          y = rows[i + 1].getElementsByTagName("TD")[n];
          if (dir == "asc") {
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
              shouldSwitch = true;
              break;
            }
          } else if ((dir = "desc")) {
            if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
              shouldSwitch = true;
              break;
            }
          }
        }
        if (shouldSwitch) {
          rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
          switching = true;
          switchcount++;
        } else {
          if (switchcount == 0 && dir == "asc") {
            dir = "desc";
            switching = true;
          }
        }
      }
    },
  },
  computed: {
    bugs() {
      return this.$store.state.bugs;
    },
  },
  components: {
    Bugs,
  },
};
</script>

<style >
.bg-bug {
  background-image: url(https://i.inews.co.uk/content/uploads/2020/07/Google-Search-AR-Insects.gif);
  background-size: cover;
}
</style>