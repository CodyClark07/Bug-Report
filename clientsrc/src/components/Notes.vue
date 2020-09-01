<template>
  <div class="notes shadow-lg border">
    <ul>
      <li>
        <h5 class="text-capitalize">
          <span>{{$auth.userInfo.name}}: {{noteData.content}}</span>

          <i
            v-if="this.$auth.userInfo"
            class="fa fa-trash-o text-danger ml-2"
            @click="removeNote(noteData)"
          ></i>
        </h5>
      </li>
    </ul>
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