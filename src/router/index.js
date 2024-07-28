import { createRouter, createWebHistory } from "vue-router";
import UserList from "../components/UserList.vue";

const routes = [
  {
    path: "/userlist",
    name: "UserList",
    component: UserList,
  },
  {
    path: "/",
    redirect: "/userlist",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
