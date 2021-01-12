<template>
  <div>
    <input
      type="text"
      class="entry-field"
      placeholder="What needs to be done?"
      v-on:keyup.enter="addTask"
      v-model="text"
    />
    <div>{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: "TaskField",
  data() {
    return { text: "" };
  },
  methods: {
    addTask() {
      alert();
    },
  },
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