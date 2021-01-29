<template>
  <div>
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
    check() {
      this.changeStatus(event.target.id);
    },
  },
  computed: mapGetters([
    "choisenTasks",
  ]),
};
</script>

<style lang="scss">
.item {
  display: block;
  height: 3rem;
  color: #0f0000;
  padding: 0.5rem;
  background-color: white;
  border-top: 0.1rem solid #e8d9d8;
}

.item:first-child {
  border-top: 0.1rem solid  #e8d9d8;
}

.item:last-child {
  border-bottom: 0.1rem solid  #e8d9d8;
}

.text-item {
  margin-left: 1.5rem;
}

input[type="checkbox"]:checked + .text-item {
  text-decoration: line-through;
  color: #777;
}
</style>
