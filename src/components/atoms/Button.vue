<template>
  <button :name="status" class="nav-button" v-on:click="choiceTypeTasks">
    {{ buttonName }}
  </button>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Button",
  props: ["buttonName", "status"],
  methods: {
    ...mapMutations(["changeTypeTasks"]),
    choiceTypeTasks() {
      this.changeTypeTasks(event.target.name);
    },
  },
};
</script>

<style lang="scss">
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

.nav-button:hover,
.nav-button:focus {
  border: 0.1rem solid red;
  color: black;
}
</style>