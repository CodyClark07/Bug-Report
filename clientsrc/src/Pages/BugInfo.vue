<template>
  <div class="bug">
    <h2 class="text-capitalize">Title: {{bug.title}}</h2>
    <span v-if="bug.closed==false" class="text-success">Status: open</span>
    <span v-else class="text-danger">Status: closed</span>
    <hr />
    <h4 class="text-capitalize">Description: {{bug.description}}</h4>
    <button class="btn btn-sm btn-outline-danger" @click="closeBug()">close bug</button>
    <hr />
    <button class="btn btn-sm btn-outline-success" @click="noteVisible = !noteVisible">Add Note</button>

    <form v-if="noteVisible" @submit.prevent="addNote()">
      <div class="form-group">
        <label for="comment"></label>
        <input
          type="text"
          class="form-control"
          id="comment"
          placeholder="Enter Comment Here..."
          v-model="newNote.comment"
        />
      </div>
      <button class="btn btn-sm btn-outline-success" type="submit">Submit</button>
    </form>
    <notes v-for="note in notes" :noteData="note" :key="note.id" />
  </div>
</template>


<script>
import Notes from "../components/Notes";
export default {
  name: "bug",
  mounted() {
    debugger;
    this.$store.dispatch("getBugById", this.$route.params.id);
    this.$store.dispatch("getNotes", this.$route.params.id);
  },
  data() {
    return {
      newNote: {},
      noteVisible: false,
      title: "",
      description: "",
    };
  },
  computed: {
    bug() {
      return this.$store.state.activeBug;
    },
    notes() {
      return this.$store.state.notes;
    },
  },
  methods: {
    closeBug() {
      this.$store.dispatch("closeBug", {
        bugId: this.bug.id,
        closed: true,
      });
    },
    addNote() {
      debugger;
      this.$store.dispatch("addNote", {
        content: this.newNote.comment,
        creatorEmail: this.$auth.userInfo.email,
        name: this.$auth.userInfo.name,
        bugId: this.bug.id,
      });
      this.newNote.comment = "";
    },
  },
  components: {
    Notes,
  },
};
</script>


<style scoped>
</style>