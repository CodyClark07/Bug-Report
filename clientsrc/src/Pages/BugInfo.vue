<template>
  <div class="bug container">
    <div class="border border-shadow mt-2 card">
      <div class="card-header">
        <h2 class="text-capitalize text-center">Title: {{bug.title}}</h2>
      </div>
      <span v-if="bug.closed==false" class="text-success ml-4">Status: Open</span>
      <span v-else class="text-danger ml-4">Status: Closed</span>
      <h6 class="ml-4">Created: {{new Date(bug.createdAt).toLocaleString()}}</h6>
      <h6 class="ml-4">Created By: {{bugs.creator.name}}</h6>
      <hr />
      <div class="card-body">
        <h4 class="text-capitalize">Description:</h4>
        <p>{{bug.description}}</p>
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
          <img
            v-if="editVisible"
            id="buggy"
            src="https://pngimg.com/uploads/bug/bug_PNG4001.png"
            style="height:40px;width:40px"
            class="img-fluid ml-2 mt-4"
          />
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
    </div>
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
      name: "",
    };
  },
  computed: {
    bug() {
      return this.$store.state.activeBug;
    },
    bugs() {
      return this.$store.state.bugs;
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
#buggy {
  position: relative;
  -webkit-animation: buggy 5s infinite;
  -webkit-animation-timing-function: linear;
  transform: rotate(90deg);
}
@-webkit-keyframes buggy {
  0% {
    left: 50px;
    transform: translate(1px, 1px) rotate(90deg);
  }
  10% {
    transform: translate(-1px, -2px) rotate(89deg);
  }
  25% {
    top: 100px;
    transform: translate(-30px, 0px) rotate(180deg);
  }
  35% {
    top: 200px;
    transform: translate(-30px, 0px) rotate(180deg);
  }
}
</style>