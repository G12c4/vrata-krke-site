import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/accommodation",
    name: "accommodation",
    component: () =>
      import(/* webpackChunkName: "accommodation" */ "../views/Accommodation.vue")
  },
  {
    path: "/services",
    name: "services",
    component: () =>
      import(/* webpackChunkName: "services" */ "../views/Services.vue")
  },
  {
    path: "/contact",
    name: "contact",
    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/Contact.vue")
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
