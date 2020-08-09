<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" :to="{ name: 'Home' }">Bug-Report</router-link>
    <img
      id="bugg"
      src="https://i.pinimg.com/originals/8d/6d/bf/8d6dbf5e345d59715f7dc043ecb23bc2.png"
      style="height:40px;width:40px"
      class="img-fluid ml-2 mt-4"
    />
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item" :class="{ active: $route.name == 'Home' }">
          <router-link :to="{ name: 'Home' }" class="nav-link">Home</router-link>
        </li>
        <li
          class="nav-item"
          v-if="$auth.isAuthenticated"
          :class="{ active: $route.name == 'Profile' }"
        >
          <router-link class="nav-link" :to="{ name: 'Profile' }">Profile</router-link>
        </li>
      </ul>
      <span class="navbar-text">
        <button class="btn btn-success" @click="login" v-if="!$auth.isAuthenticated">Login</button>
        <button class="btn btn-sm btn-danger" @click="logout" v-else>logout</button>
      </span>
    </div>
  </nav>
</template>

<script>
import axios from "axios";
import { getUserData } from "@bcwdev/auth0-vue";
export default {
  name: "Navbar",
  methods: {
    async login() {
      await this.$auth.loginWithPopup();
      if (this.$auth.isAuthenticated) {
        this.$store.dispatch("setBearer", this.$auth.bearer);
        this.$store.dispatch("getProfile");
      }
    },
    async logout() {
      this.$store.dispatch("resetBearer");
      await this.$auth.logout({ returnTo: window.location.origin });
    },
  },
};
</script>

<style scoped>
#bugg {
  position: relative;
  -webkit-animation: bugg 15s infinite;
  -webkit-animation-timing-function: ease-in-out;
  transform: rotate(165deg);
}
@-webkit-keyframes bugg {
  from {
    left: -400px;
  }
  to {
    left: 1200px;
  }
  0% {
    transform: translate(1px, 1px) rotate(165deg);
  }
  10% {
    transform: translate(-1px, -2px) rotate(-165deg);
  }
  20% {
    transform: translate(-3px, 0px) rotate(165deg);
  }
  30% {
    transform: translate(3px, 2px) rotate(165deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(165deg);
  }
  50% {
    transform: translate(-1px, 2px) rotate(-165deg);
  }
  60% {
    transform: translate(-3px, 1px) rotate(165deg);
  }
  70% {
    transform: translate(3px, 1px) rotate(-165deg);
  }
  80% {
    transform: translate(-1px, -1px) rotate(165deg);
  }
  90% {
    transform: translate(1px, 2px) rotate(165deg);
  }
  100% {
    transform: translate(1px, -2px) rotate(-165deg);
  }
}
</style>
