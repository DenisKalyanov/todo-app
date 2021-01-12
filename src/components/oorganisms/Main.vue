<template>
  <div class="list-item">
    <Item />
  </div>
</template>

<script>
import Item from "../molecules/Item";

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
