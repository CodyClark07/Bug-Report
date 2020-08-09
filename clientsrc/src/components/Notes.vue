<template>
  <div class="notes">
    <h4>{{noteData.content}}</h4>
    <button class="btn btn-sm btn-danger">x</button>
  </div>
</template>


<script>
export default {
  name: "notes",
  props: ["noteData"],
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {},
};
</script>


<style scoped>
</style>