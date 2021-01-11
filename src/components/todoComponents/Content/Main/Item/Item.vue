<template>
  <div>
    <label class="item" v-for="message in messages" :key="message.id">
      <input type="checkbox" />
      <span class="text-item">{{ message }}</span>
    </label>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: ["textItem"],
  data() {
    return {
      messages: [
        "New task 1",
        "New task 3",
        "New task 2",
        "New task 4",
        "New task 5",
      ],
    };
  },
};
</script>

<style>
.item {
  display: block;
  height: 3rem;
  color: #0f0000;
  padding: 0.5rem;
  background-color: #fefefe;
  border-top: 0.1rem solid #ededed;
}

.item:first-child {
  border-top: 0.1rem solid #ededed;
}

.item:last-child {
  border-bottom: 0.1rem solid #ededed;
}

.text-item {
  margin-left: 1.5rem;
}

input[type="checkbox"]:checked + .text-item {
  text-decoration: line-through;
  color: #bbb;
}
</style>
