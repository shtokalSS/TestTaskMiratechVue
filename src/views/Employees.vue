<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <ul class="employees">
      <router-link
        tag="li"
        class="employee"
        v-for="employee in employees"
        :key="employee.id"
        :to="{ name: 'employeeMeetings', params: { employeeId: employee.id, employeeName: employee.fullName }}"
      >{{ employee.fullName }}</router-link>
    </ul>
  </div>
</template>

<script>
// import ListItems from '@/components/ListItems.vue'
// import HelloWorld from "@/components/HelloWorld.vue";
import axios from "axios";
import BASE_API from "../config"
export default {
  name: "home",
  data() {
    return {
      employees: Array
    };
  },
  mounted() {
    // console.log(BASE_API+"/Employees/GetAll");
    axios.get(BASE_API+"/Employees/GetAll").then(response => {
      this.employees = response.data;
    });
  }
};
</script>

<style>
@import "./List.css";

.employee {
  font-size: 200%;
}
.employee:hover {
  background-color: #b34ee9;
  cursor: pointer;
  color: white;
}
</style>
