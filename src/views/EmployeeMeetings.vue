<template>
  <div class="meetings">
    <P class="name">{{employeeName}}</P>
    <hr />
    <P class="name">meetings:</P>
    <ul id="meetings">
      <li class="meeting" v-for="meeting in meetings" :key="meeting.id">{{meeting.title}}</li>
    </ul>
  </div>
</template>


<script >
import axios from "axios";
import BASE_API from "../config"

export default {
  name: "employeeMeetings",
  props: ["employeeId", "employeeName"],
  data() {
    return {
      meetings: Array
    };
  },
  mounted() {
    axios
      .get(
        BASE_API+"/Employees/" +
          this.employeeId +
          "/GetMeetings"
      )
      .then(response => {
        this.meetings = response.data;
      });
  }
};
</script>

<style >
@import "./List.css";

.name {
  font-size: 300%;
}
.meeting {
  font-size: 200%;
}
</style>