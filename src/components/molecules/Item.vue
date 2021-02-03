<template>
  <div>
    <div v-show="showEmptyBlock" class="emptyBlock">
      Completed tasks is empty
    </div>
    <label class="item" v-for="task in choisenTasks" :key="task.id">
      <input
        type="checkbox"
        :id="task.id"
        :checked="task.checked"
        @change="check($event.target)"
      />
      <span class="text-item">{{ task.message }}</span>
    </label>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Item",
  methods: {
    ...mapMutations(["changeStatus"]),
    check(target) {
      this.changeStatus(target.id);
    },
  },
  computed: mapGetters(["choisenTasks", "showEmptyBlock"]),
};
</script>

<style lang="scss">
@import "@/styles/colors.scss";

.emptyBlock {
  margin: 0 auto;
  text-align: center;
  padding: 0.1rem 0 0.7rem 0;
}
.item {
  display: block;
  height: 3rem;
  color: $black;
  padding: 0.5rem;
  background-color: $white;
  border-top: 0.1rem solid $lightGrey;

  input[type="checkbox"]:checked + .text-item {
    text-decoration: line-through;
    color: $grey;
  }

  &:first-child {
    border-top: 0.1rem solid $lightGrey;

    &:last-child {
      border-bottom: 0.1rem solid $lightGrey;
    }
  }

  .text-item {
    margin-left: 1.5rem;
  }
}
</style>
