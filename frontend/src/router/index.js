import { createRouter, createWebHistory } from "vue-router";
import UserForm from "../views/UserForm.vue";


import ShowAllPosts from "../views/ShowAllPosts.vue";
import PostUniqueUsersView from "../views/PostUniqueUser.vue";



const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/Login",
  },
  {
    path: "/Login",
    name: "Login",
    component: UserForm,
  },
  {
    path: "/Signup",
    name: "Signup",
    component: UserForm,
  },
  {
    path: "/allPosts",
    name: "allPosts",
    component: ShowAllPosts,
  },
  {
    path: "/post/:id",
    name: "post",
    component: PostUniqueUsersView,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
