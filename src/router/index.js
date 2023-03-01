import Vue from 'vue'
import VueRouter from 'vue-router'

// views
import DashBoard from '../views/DashBoard.vue'
import LogIn from '../views/LogIn.vue'
import SingUp from '../views/SingUp.vue'
import AttendenceDay from '../views/AttendenceDay.vue'
import ManagementScreen from '../views/ManagementScreen.vue'
import StudentClasses from '../views/StudentClasses.vue'

Vue.use(VueRouter)

const routes = [
  {
      name: "DashBoard",
      component: DashBoard,
      path: "/"
  },
  {
      name: "LogIn",
      component: LogIn,
      path: "/login"
  },
  {
      name: "SingUp",
      component: SingUp,
      path: "/singup"
  },
  {
    name: "StudentClasses",
    component: StudentClasses,
    path: "/class"
  },
  {
    name: "AttendenceDay",
    component: AttendenceDay,
    path: "/attendence"
  },
  {
    name: "ManagementScreen",
    component: ManagementScreen,
    path: "/management"
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
