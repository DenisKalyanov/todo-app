<template>
  <div class="select-list">
    <TaskField />
    <Main />
    <Footer />
  </div>
</template>

<script>
import TaskField from "./TaskField/TaskField";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

export default {
  name: "Content",
  components: {
    TaskField,
    Main,
    Footer,
  },
};
</script>

<style>
.select-list {
  min-width: 30rem;
  padding: 1rem 0.5rem;
  font-style: italic;
  color: #0f0000;
  background-color: #fefefe;
  box-shadow: 0 0 1rem 0 #8f8f8f;
  position: relative;
}

.select-list:hover {
  color: #bbb;
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
