import { createRouter, createWebHashHistory } from 'vue-router';
import Calendar from './components/Calendar.vue';
import Classenroll from "./components/Classenroll.vue";
// import Maincalendar from './components/Maincalendar.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Calendar,
  },
  {
    path: '/Classenroll',
    name: 'Classenroll',
    component: Classenroll,
  },
//   {
//     path: '/Maincalendar',
//     name: 'Maincalendar',
//     component: Maincalendar,
//   },

  // You can define more routes here
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;    