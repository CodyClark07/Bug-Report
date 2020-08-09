<template>
  <div class="notes">
    <h4 class="text-capitalize">
      {{noteData.content}}
      <i class="fa fa-trash-o text-danger" @click="removeNote(noteData)"></i>
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
  methods: {
    removeNote(noteData) {
      this.$store.dispatch("removeNote", {
        id: this.noteData.id,
        bugId: this.noteData.bugId,
      });
    },
  },
  components: {},
};
</script>


<style scoped>
</style>