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

<style lang="scss">

.list-item {
  font-style: normal;
  display: block;
  position: relative;
  top: 0.6rem;
  left: -0.3rem;
}

</style>
