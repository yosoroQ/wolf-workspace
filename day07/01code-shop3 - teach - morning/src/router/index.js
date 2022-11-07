import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: Home, // 重定向
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  // {
  //   path: "/goods",
  //   name: "Goods",
  //   component: () => import("@/views/Goods"),
  // },
  // {
  //   path: "/order",
  //   name: "Order",
  //   component: () => import("@/views/Goods"),
  // },
  // {
  //   path: "/user",
  //   name: "User",
  //   component: () => import("@/views/User"),
  // },
  // {
  //   path: "/free",
  //   name: "Free",
  //   component: () => import("@/views/Free"),
  // },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
