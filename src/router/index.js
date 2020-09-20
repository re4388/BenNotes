import Vue from "vue";
import Router from "vue-router";
import Hello from "@/components/HelloWorld";
import About from "@/components/About";
import Repos from "@/components/Repos";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/repos",
      name: "Hello",
      component: Hello
    },
    {
      path: "/about",
      name: "About",
      component: About
    },
    {
      path: "/repos",
      name: "Repos",
      component: Repos
    }
  ]
});
