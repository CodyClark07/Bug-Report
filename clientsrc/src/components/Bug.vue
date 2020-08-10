<template>
  <tr class="Bugs" @click="openBug">
    <td class="text-capitalize">
      <i
        v-if="this.$auth.userInfo.email = user.email"
        class="fa fa-trash-o text-danger ml-2"
        @click="removeBug(bugData)"
      ></i>
      {{bugData.title}}
    </td>
    <td>{{bugData.creator.name}}</td>
    <td v-if="bugData.closed == false" class="text-success">{{this.status}}</td>
    <td v-else class="text-danger">{{this.status}}</td>
    <td>{{updatedDate}}</td>
  </tr>
</template>


<script>
import BugInfo from "../Pages/BugInfo";
export default {
  name: "Bugs",
  props: ["bugData"],
  data() {
    return {
      status: this.bugData.closed ? "Closed" : "Open",
      updatedDate: new Date(this.bugData.updatedAt).toLocaleString(),
    };
  },
  computed: {
    user() {
      return this.$store.state.profile;
    },
  },
  methods: {
    openBug() {
      this.$router.push({ name: "bug-info", params: { id: this.bugData.id } });
    },
    removeBug(bugData) {
      this.$store.dispatch("removeBug", {
        bugId: this.bugData.id,
        creatorEmail: this.bugData.creatorEmail,
      });
    },
  },
  components: { BugInfo },
};
</script>


<style scoped>
tr:hover {
  padding: 15px;
  text-align: center;
  background-color: rgba(132, 136, 132, 0.829);
}
</style>