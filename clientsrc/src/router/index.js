import Vue from "vue";
import VueRouter from "vue-router";
// @ts-ignore
import Home from "../Pages/Home.vue";
// import Bug from "../components/Bug.vue"
// @ts-ignore
import Profile from "../Pages/Profile.vue";
import { authGuard } from "@bcwdev/auth0-vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,

  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    beforeEnter: authGuard,
  },
  {
    path: "/bugs/:id",
    name: "bug-info",
    component: () => import(/* webpackChunkName: "BugInfo" */ '../Pages/BugInfo.vue'),
    beforeEnter: authGuard,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
