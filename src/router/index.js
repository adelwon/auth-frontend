import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/HomeView";
import Signup from "@/views/SignupView";
import Signin from "@/views/SigninView";
import Dashboard from "../views/DashboardView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/en/signup",
    name: "Signup",
    component: Signup,
    meta: { guestOnly: true }
  },
  {
    path: "/en/signin",
    name: "Signin",
    component: Signin,
    meta: { guestOnly: true }
  },
  {
    path: "/en/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: { authOnly: true }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

function isLoggedIn() {
  return localStorage.getItem("auth");
}

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authOnly)) {
    if (!isLoggedIn()) {
      next({
        path: "/en/signin",
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.guestOnly)) {
    if (isLoggedIn()) {
      next({
        path: "/en/dashboard",
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
