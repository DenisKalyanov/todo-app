<template>
  <div>
    <Button buttonName="All" status="allTasks"/>
    <Button buttonName="Active" status="activeTasks"/>
    <Button buttonName="Completed" status="completedTasks"/>
  </div>
</template>

<script>
import Button from "../atoms/Button";

export default {
  name: "StatusButtons",
  components: {
    Button,
  },
};
</script>

<style lang="scss">
</style>