<template>
  <div class="list-item">
    <Item textItem="New task 1" />
    <Item textItem="New task 3" />
    <Item textItem="New task 2" />
    <Item textItem="New task 4" />
    <Item textItem="New task 5" />
  </div>
</template>

<script>
import Item from "./Item/Item";

export default {
  name: "Main",
  components: {
    Item,
  },
};
</script>

<style>
.select-list:hover .list-item {
  display: block;
  position: relative;
  top: 0.6rem;
  left: -0.3rem;
}

.list-item {
  display: none;
  font-style: normal;
}
</style>
