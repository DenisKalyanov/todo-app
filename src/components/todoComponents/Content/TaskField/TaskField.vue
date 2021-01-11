<template>
  <input
    type="text"
    class="entry-field"
    placeholder="What needs to be done?"
    v-model="newTask"
  />
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "TaskField",
  method: mapActions(["addTask"]),
};
</script>

<style>
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
  color: #505050;
}
</style>
