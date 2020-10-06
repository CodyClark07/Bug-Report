<template>
  <div class="home text-align-center">
    <button
      class="btn btn-sm btn-outline-warning mt-5 mb-2"
      @click="inputVisible = !inputVisible"
      :disabled="!$auth.isAuthenticated"
    >
      Report Bug
    </button>
    <div class="card">
      <img
        v-if="inputVisible"
        id="buggy"
        src="https://i1.wp.com/freepngimages.com/wp-content/uploads/2017/06/stag-beetle-no-background.png?fit=769%2C913"
        style="height: 60px; width: 70px"
        class="img-fluid ml-2 mt-4"
      />
      <div class="card-body">
        <form v-if="inputVisible" @submit.prevent="addBug()" class="mb-5">
          <div class="form-group">
            <label for="title"></label>
            <input
              type="text"
              class="form-control w-25"
              id="title"
              placeholder="Enter Title Here..."
              v-model="newBug.title"
              required
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
              required
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
            <th
              @click="sortTable(0)"
              data-toggle="tooltip"
              data-placement="top"
              title="Click to sort"
            >
              <u>Title</u>
            </th>
            <th
              @click="sortTable(1)"
              data-toggle="tooltip"
              data-placement="top"
              title="Click to sort"
            >
              <u>Reported By</u>
            </th>
            <th
              @click="sortTable(2)"
              data-toggle="tooltip"
              data-placement="top"
              title="Click to sort"
            >
              <u>Status</u>
            </th>
            <th
              @click="sortTable(3)"
              data-toggle="tooltip"
              data-placement="top"
              title="Click to sort"
            >
              <u>Last Updated</u>
            </th>
          </tr>
          <bugs v-for="bug in bugs" :bugData="bug" :key="bug.id" :id="bug.id" />
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Bugs from "../components/Bug";
export default {
  name: "home",
  mounted() {
    this.$store.dispatch("getBugs");
    $('[data-toggle="tooltip"]').tooltip({
      trigger: "hover",
    });
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
#buggy {
  position: relative;
  -webkit-animation: buggy 5s infinite;
  -webkit-animation-timing-function: linear;
  transform: rotate(90deg);
}
@-webkit-keyframes buggy {
  0% {
    left: 0px;
    top: 0px;
  }
  25% {
    transform: rotate(180deg);
    left: 200px;
    top: 0px;
  }
  50% {
    transform: rotate(270deg);
    left: 200px;
    top: 200px;
  }
  75% {
    transform: rotate(-180deg);
    left: 0px;
    top: 200px;
  }
  100% {
    left: 0px;
    top: 0px;
  }
}
</style>