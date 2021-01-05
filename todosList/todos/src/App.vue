<template>
  <div id="app">
    <TodosList />
  </div>
</template>

<script>
import TodosList from "./components/TodosList.vue";

export default {
  name: "App",
  components: {
    TodosList,
  },
};
</script>

<style>
</style>
