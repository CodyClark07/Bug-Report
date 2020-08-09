<template>
  <tr class="Bugs" @click="openBug">
    <td class="text-capitalize">{{bugData.title}}</td>
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
      status: this.bugData.closed ? "closed" : "open",
      updatedDate: new Date(this.bugData.updatedAt).toLocaleString(),
    };
  },
  computed: {},
  methods: {
    openBug() {
      this.$router.push({ name: "bug-info", params: { id: this.bugData.id } });
    },
  },
  components: { BugInfo },
};
</script>


<style scoped>
</style>