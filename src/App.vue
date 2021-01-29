<template>
  <div id="app">
    <TodosList />
  </div>
</template>

<script>
import TodosList from "./components/oorganisms/TodosList";

export default {
  name: "App",
  components: {
    TodosList,
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #f5f5f5;
  margin: 0 auto;
  font-size: 1.5rem;
}
</style>
