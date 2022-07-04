import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import Booking from '../views/Booking.vue'
import Schedule from '../views/Schedule.vue'
import Manage from '../views/Manage.vue'

const router = createRouter({
    history: createWebHistory('/ssa1'),
    routes: [
      //   {
      //       path: '/:catchNotMatchPath(.*)',
      //       name: 'NotFound',
      //       component: NotFound,
      //       meta: { title: 'Sorry! 404 Not found - OASIP' }
      // },
      {
        path: '/',
        name: 'Home',
        component: Home,
        meta: { title: 'OASIP - Welcome to Online Appointment Sevice for IntegratedProject Clinic.' }
      },
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: '/schedule',
        name: 'Schedule',
        component: Schedule
      },
      {
        path: '/booking',
        name: 'Booking',
        component: Booking
      },
      {
        path: '/manage',
        name: 'Manage',
        component: Manage
      }
    ],
})
export default router