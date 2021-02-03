<template>
  <h1 class="header-list">todos</h1>
</template>


<script>
export default {
  name: "Header",
};
</script>

<style lang="scss">
@import "@/styles/colors.scss";

.header-list {
  justify-content: flex-end;
  padding: 1rem 0;
  color: $lightGrey;
  font-family: Helvetica, sans-serif;
}
</style>