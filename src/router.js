import Vue from "vue";
import Router from "vue-router";
import Employees from "./views/Employees.vue";
import EmployeeMeetings from "./views/EmployeeMeetings.vue"

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    
    {
      path: "/Employees",
      name: "employees",
      component: Employees
    },
    {
      path: "/user-meetings/:userId",
      name: "employeeMeetings",
      component: EmployeeMeetings
    },
    {
      path: "*",
      name: "*",
      redirect: "/Employees"
    },
  ]
});
