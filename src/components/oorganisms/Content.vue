<template>
  <div class="select-list">
    <TaskField />
    <Main />
    <Footer />
  </div>
</template>

<script>
import TaskField from "../atoms/TaskField";
import Main from "./Main";
import Footer from "./Footer";

export default {
  name: "Content",
  components: {
    TaskField,
    Main,
    Footer,
  },
};
</script>

<style lang="scss">
.select-list {
  min-width: 30rem;
  padding: 1rem 0.5rem;
  font-style: italic;
  color: black;
  background-color: white;
  box-shadow: 0 0 1rem 0 #777;
  position: relative;
}

.select-list:hover {
  color: #777;
}

.select-list::before {
  position: absolute;
  content: "\02C5";
  top: 1.5rem;
  left: 1rem;
}

@media all and (max-width: 30rem) {
  .select-list {
    min-width: 100%;
  }
}
</style>
