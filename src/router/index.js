import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Form from "../views/Form.vue";
import Api from "../views/Api.vue";
import Todo from "../views/Todo.vue";
import Button from "../views/Button.vue"
import Grid from "../views/Grid.vue"
import Alert from "../views/Alert.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/button",
    name: "Button",
    component: Button,
  },
  {
    path: "/form",
    name: "Form",
    component: Form,
  },
  {
    path: "/api",
    name: "Api",
    component: Api,
  },
  {
    path: "/todo",
    name: "Todo",
    component: Todo,
  },
  {
    path: "/grid",
    name: "Grid",
    component: Grid,
  },
  {
    path: "/alert",
    name: "Alert",
    component: Alert,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
