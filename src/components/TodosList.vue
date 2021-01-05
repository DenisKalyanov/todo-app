<template>
  <div class="task-list">
    <Header />
    <Content />
  </div>
</template>

<script>
import Content from "./todoComponents/Content/Content";
import Header from "./todoComponents/Header/Header";

export default {
  name: "TodosList",
  components: {
    Content,
    Header,
  },
};
</script>


<style>
.task-list {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}


@media all and (max-width: 30rem) {
  .select-list {
    min-width: 100%;
  }

  .select-list:hover .hidden-item {
    display: none;
  }
}
</style>
