<template>
  <div class="Bug">
    <h2>Title: {{bug.title}}</h2>
    <span v-if="bug.closed==false" class="text-success">Status: open</span>
    <span v-else class="text-danger">Status: closed</span>
    <hr />
    <h4>Description: {{bug.description}}</h4>
    <button class="btn btn-sm btn-outline-danger" @click="closeBug()">X</button>
    <hr />
  </div>
</template>


<script>
export default {
  name: "Bug",
  mounted() {
    this.$store.dispatch("getBugById", this.$route.params.id);
  },
  data() {
    return {
      title: "",
      description: "",
    };
  },
  computed: {
    bug() {
      return this.$store.state.activeBug;
    },
  },
  methods: {
    closeBug() {
      this.$store.dispatch("closeBug", {
        bugId: this.bug.id,
        closed: true,
      });
    },
  },
  components: {},
};
</script>


<style scoped>
</style>