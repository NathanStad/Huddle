import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import News from "../components/News.vue";
import Stories from "../components/Stories.vue";
import Agenda from "../components/Agenda.vue";
import Opportunities from "../components/Opportunities.vue";
import Informations from "../components/Informations.vue";

import ShePredicts from "../components/ShePredicts/ShePredicts.vue";
import ShePredictsHome from "../components/ShePredicts/ShePredictsHome.vue";
import ShePredictsChoice from "../components/ShePredicts/ShePredictsChoice.vue";
import ShePredictsPredictions from "../components/ShePredicts/ShePredictsPredictions.vue";
import ShePredictsMVP from "../components/ShePredicts/ShePredictsMvp.vue";
import ShePredictsRanking from "../components/ShePredicts/ShePredictsRanking.vue";

import Profile from "../components/Profile.vue";
import Contact from "../components/Contact.vue";
import EventDetails from "../components/EventDetails.vue";

const routes = [
  {
    path: "/",
    name: "Accueil",
    component: Home,
  },
  {
    path: "/news",
    name: "News",
    component: News,
    props: true,
  },
  {
    path: "/stories",
    name: "Stories",
    component: Stories,
    props: true,
  },
  {
    path: "/agenda",
    name: "Agenda",
    component: Agenda,
    props: true,
  },
  {
    path: "/agenda/:id",
    name: "EventDetails",
    component: EventDetails,
    props: true,
  },
  {
    path: "/opportunities",
    name: "Opportunities",
    component: Opportunities,
    props: true,
  },
  {
    path: "/shepredicts",
    name: "ShePredicts",
    component: ShePredicts,
    props: true,
  },
  {
    path: "/shepredicts/home",
    name: "ShePredictsHome",
    component: ShePredictsHome,
    props: true,
  },
  {
    path: "/shepredicts/choice",
    name: "ShePredictsChoice",
    component: ShePredictsChoice,
    props: true,
  },
  {
    path: "/shepredicts/predictions",
    name: "ShePredictsPredictions",
    component: ShePredictsPredictions,
    props: true,
  },
  {
    path: "/shepredicts/mvp",
    name: "ShePredictsMVP",
    component: ShePredictsMVP,
    props: true,
    },
    {
    path: "/shepredicts/ranking",
    name: "ShePredictsRanking",
    component: ShePredictsRanking,
    props: true,
    },
  {
    path: "/informations",
    name: "Informations",
    component: Informations,
    props: true,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    props: true,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top
    return { top: 0 };
  },
});

export default router;
