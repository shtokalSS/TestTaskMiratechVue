<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <ListItems />
  </div>
</template>

<script >
import ListItems from '@/components/ListItems.vue'
// import HelloWorld from "@/components/HelloWorld.vue";



export default {
  name: "home",
  components:{
    // HelloWorld,
    ListItems
  },
  data() {
    return {
      employees: [
        { id: 1, name: "BMW" },
        { id: 2, name: "Google"},
        { id: 3, name: "Apple"},
        { id: 4, name: "Twitter"}
      ],
      linkPathBase: "userMettings"
    };
  }
};
</script>


<style scoped>
ul {
  list-style: none;
  padding: 0;
}
li {
  padding: 5px 10px;
  background-color: #EEEEEE;
  border: 1px solid #DDDDDD;
}
</style>
