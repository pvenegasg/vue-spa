import VueRouter from 'vue-router';
import Login from './views/login/Login';

// Chunkies
const Dashboard = () =>
  import(/* webpackChunkName: "dashboard" */ './views/dashboard/Dashboard');

const routes = [
  { path: '/', component: Login },
  { path: '/dashboard', component: Dashboard },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
