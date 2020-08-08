<template>
  <tr class="Bug" @click="openBug(bugData.id)">
    <td>{{bugData.title}}</td>
    <td>{{bugData.creator.name}}</td>
    <td>{{this.status}}</td>
    <td>{{bugData.updatedAt}}</td>
  </tr>
</template>


<script>
export default {
  name: "Bug",
  props: ["bugData"],
  data() {
    return {
      status: this.bugData.closed ? "closed" : "open",
    };
  },
  computed: {},
  methods: {},
  components: {},
};
</script>


<style scoped>
</style>