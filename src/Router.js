import {createRouter, createWebHistory} from 'vue-router';
import HomeEmpleados from './components/HomeEmpleados.vue';
import ListaEmpleados from './components/ListaEmpleados.vue';

const myRoutes = [
  {
    path: '/',
    component: HomeEmpleados,
  },
  {
    path: '/empleados',
    component: ListaEmpleados,
  },
];

const router = createRouter ({
  history: createWebHistory (),
  routes: myRoutes,
});

export default router;
