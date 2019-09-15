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
      path: "/employee-meetings/:employeeId",
      name: "employeeMeetings",
      props: true,
      component: EmployeeMeetings
    },
    {
      path: "*",
      name: "*",
      redirect: "/Employees"
    },
  ]
});
