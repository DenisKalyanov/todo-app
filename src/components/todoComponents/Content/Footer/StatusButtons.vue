<template>
  <div>
    <Button buttonName="All" />
    <Button buttonName="Active" />
    <Button buttonName="Completed" />
  </div>
</template>

<script>
import Button from "./Button/Button";

export default {
  name: "StatusButtons",
  components: {
    Button,
  },
};
</script>

<style>
</style>