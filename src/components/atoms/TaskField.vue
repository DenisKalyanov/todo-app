<template>
  <input
    type="text"
    class="entry-field"
    placeholder="What needs to be done?"
    v-model.trim="newTask"
    v-on:keyup.enter="addTask"
  />
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "TaskField",
  data() {
    return {
      newTask: "",
    };
  },
  methods: {
    ...mapMutations(["createTask"]),
    addTask() {
      this.createTask(this.newTask);
      this.newTask = "";
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/colors.scss";

.entry-field {
  padding: 0.5rem;
  padding-left: 2.5rem;
  font-family: "Helvetica Neue";
  font-size: 1.5rem;
  font-weight: 100;
  font-style: italic;
  border: 0;
  width: 100%;
  outline: none;
  color: $darkGrey;
}
</style>