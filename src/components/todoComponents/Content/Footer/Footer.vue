<template>
  <div class="navigation-item">
    <span>2 2 left</span>
    <StatusButtons />
    <div>
      <Button buttonName="Clear completed" />
    </div>
    <div class="hidden-item hidden-item-first"></div>
    <div class="hidden-item hidden-item-second"></div>
  </div>
</template>

<script>
import Button from "./Button/Button";
import StatusButtons from "./StatusButtons";

export default {
  name: "Footer",
  components: {
    Button,
    StatusButtons,
  },
};
</script>

<style>
.navigation-item {
  display: none;
  font-style: normal;
}

.select-list:hover .navigation-item {
  display: flex;
  flex-wrap: wrap;
  min-height: 2rem;
  justify-content: space-between;
  align-items: flex-end;
  color: #777;
  margin: 0.5rem 0 0 0.5rem;
  position: relative;
}

.navigation-item span {
  padding-right: 1rem;
  font-size: 1rem;
  padding-bottom: 0.1rem;
}

.hidden-item {
  display: none;
}
.select-list:hover .hidden-item {
  display: block;
  height: 1rem;
  position: absolute;
  background-color: #fefefe;
  border: 0.1rem solid #ededed;
  box-shadow: 0 0 0.6rem 0 #8f8f8f;
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

@media all and (max-width: 30rem) {
  .select-list:hover .hidden-item {
    display: none;
  }
}
</style>