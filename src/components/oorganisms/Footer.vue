<template>
  <div class="navigation-item">
    <span>2 2 left</span>
    <StatusButtons />
    <Button buttonName="Clear completed" status="deleteCompleted" />
    <div class="hidden-item hidden-item-first"></div>
    <div class="hidden-item hidden-item-second"></div>
  </div>
</template>

<script>
import Button from "../atoms/Button";
import StatusButtons from "../molecules/StatusButtons";

export default {
  name: "Footer",
  components: {
    Button,
    StatusButtons,
  },
};
</script>

<style lang="scss">
@import "../../styles/colors";

.navigation-item {
  font-style: normal;
  display: flex;
  flex-wrap: wrap;
  min-height: 2rem;
  justify-content: space-between;
  align-items: flex-end;
  color: $grey;
  margin: 0.5rem 0 0 0.5rem;
  position: relative;
  
  span {
    padding-right: 1rem;
    font-size: 1rem;
    padding-bottom: 0.1rem;
  }

  .hidden-item {
    display: block;
    height: 1rem;
    position: absolute;
    background-color: $white;
    border: 0.1rem solid $lightGrey;
    box-shadow: 0 0 0.6rem 0 $grey;
  }

  .hidden-item-first {
    width: 28rem;
    top: 2.7rem;
    z-index: -1;
  }

  .hidden-item-second {
    width: 27rem;
    top: 3.3rem;
    left: 0.5rem;
    z-index: -2;
  }
}

@media all and (max-width: 30rem) {
  .select-list:hover .hidden-item {
    display: none;
  }
}
</style>