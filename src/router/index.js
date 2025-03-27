import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Blog from "../components/Blog.vue";
import Agenda from "../components/Agenda.vue";
import Mentorat from "../components/Mentorat.vue";
import Informations from "../components/Informations.vue";
import ShePredicts from "../components/ShePredicts.vue";
import Profil from "../components/Profil.vue";

const routes = [
  {
    path: "/",
    name: "Accueil",
    component: Home,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
    props: true,
  },
  {
    path: "/agenda",
    name: "Agenda",
    component: Agenda,
    props: true,
  },
  {
    path: "/mentorat",
    name: "Mentorats et Formations",
    component: Mentorat,
    props: true,
  },
  {
    path: "/shepredicts",
    name: "ShePredicts",
    component: ShePredicts,
    props: true,
  },
  {
    path: "/informations",
    name: "Informations",
    component: Informations,
    props: true,
  },
  {
    path: "/profil",
    name: "Profil",
    component: Profil,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
