<template>
  <div class="notes">
    <h5 class="text-capitalize">
      <span>{{noteData.content}}</span>

      <i class="fa fa-trash-o text-danger" @click="removeNote(noteData)"></i>
    </h5>
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