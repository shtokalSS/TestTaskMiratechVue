<template>
  <ul id="example-1">
    <router-link
      tag="li"
      v-for="item in items"
      :key="item.id"
      :to="{name: 'employeeMeetings', params: {userId: item.id}}"
    >{{item.name}}</router-link>
  </ul>
</template>

<script>
export default {
  name: "ListItems",
  data() {
    return {
      items: [
        { id: 1, name: "BMW" },
        { id: 2, name: "Google"},
        { id: 3, name: "Apple"},
        { id: 4, name: "Twitter"}
      ],
      linkPathBase: "employeeMettings"
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
  background-color: #eeeeee;
  border: 1px solid #dddddd;
}
</style>
