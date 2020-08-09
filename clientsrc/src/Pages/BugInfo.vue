<template>
  <div class="bug container">
    <h2 class="text-capitalize text-center">Title: {{bug.title}}</h2>
    <span v-if="bug.closed==false" class="text-success">Status: open</span>
    <span v-else class="text-danger">Status: closed</span>
    <hr />
    <h4 class="text-capitalize">Description: {{bug.description}}</h4>
    <button
      class="btn btn-sm btn-outline-danger"
      :disabled="bug.closed == true"
      @click="closeBug()"
    >Close Bug</button>
    <button
      v-if="this.$auth.userInfo"
      class="btn btn-sm btn-outline-warning ml-2"
      :disabled="bug.closed == true"
      @click="editVisible = !editVisible"
    >Edit Bug</button>
    <form v-if="editVisible" @submit.prevent="editBug(bug.id)">
      <div class="form-group">
        <label for="title"></label>
        <input
          type="text"
          class="form-control w-25"
          id="title"
          placeholder="Enter Title Here..."
          v-model="editedBug.title"
        />
      </div>
      <div class="form-group">
        <label for="description"></label>
        <input
          type="text"
          class="form-control w-50"
          id="description"
          placeholder="Enter Description Here..."
          v-model="editedBug.description"
        />
      </div>
      <button class="btn btn-sm btn-outline-success mb-2" type="submit">Submit</button>
    </form>
    <hr />
    <button
      class="btn btn-sm btn-outline-success mb-2"
      :disabled="bug.closed == true"
      @click="noteVisible = !noteVisible"
    >Add Note</button>

    <form v-if="noteVisible" @submit.prevent="addNote()">
      <div class="form-group">
        <label for="comment"></label>
        <input
          type="text"
          class="form-control w-50"
          id="comment"
          placeholder="Enter Comment Here..."
          v-model="newNote.comment"
        />
      </div>
      <button class="btn btn-sm btn-outline-success mb-2" type="submit">Submit</button>
    </form>
    <br />
    <h3>
      <u>NOTES:</u>
    </h3>
    <notes v-for="note in notes" :noteData="note" :key="note.id" />
  </div>
</template>


<script>
import Notes from "../components/Notes";
export default {
  name: "bug",
  mounted() {
    this.$store.dispatch("getBugById", this.$route.params.id);
    this.$store.dispatch("getNotes", this.$route.params.id);
  },
  data() {
    return {
      editedBug: {},
      newNote: {},
      noteVisible: false,
      editVisible: false,
      disableEdit: true,
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
    enableEdit() {
      debugger;
      if (bug.closed == true) {
        this.disableEdit = false;
      }
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
      this.$store.dispatch("addNote", {
        content: this.newNote.comment,
        creatorEmail: this.$auth.userInfo.email,
        name: this.$auth.userInfo.name,
        bugId: this.bug.id,
      });
      this.newNote.comment = "";
    },
    editBug(id) {
      this.$store.dispatch("editBug", {
        id: id,
        title: this.editedBug.title,
        description: this.editedBug.description,
        creatorEmail: this.$auth.userInfo.email,
      });
      this.editedBug = { title: "", description: "" };
    },
  },
  components: {
    Notes,
  },
};
</script>


<style scoped>
</style>