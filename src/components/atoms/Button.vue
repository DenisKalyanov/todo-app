<template>
  <button class="nav-button">{{ buttonName }}</button>
</template>

<script>
export default {
  name: "Button",
  props: ["buttonName"],
};
</script>

<style>
.nav-button {
  margin-right: 0.5rem;
  background-color: transparent;
  font-size: 1rem;
  color: #777;
  outline: none;
  border: 0.1rem solid transparent;
  border-radius: 0.2rem;
  cursor: pointer;
}

.nav-button:hover {
  border: 0.1rem solid red;
  color: black;
}
</style>