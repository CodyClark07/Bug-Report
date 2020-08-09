<template>
  <div class="notes">
    <h4 class="text-capitalize">
      {{noteData.content}}
      <i class="fa fa-trash-o text-danger" @click="removeNote(noteData.id)"></i>
    </h4>
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