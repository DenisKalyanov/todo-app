import { v4 as uuidv4 } from "uuid";

export default {
  actions: {
    setState(context) {
      context.commit("setState");
    },
  },
  mutations: {
    setState(state) {
      state.tasks = JSON.parse(localStorage.getItem("tasks")) || new Array();
    },
    createTask(state, newTask) {
      if (newTask) {
        const task = { message: newTask, checked: false, id: uuidv4() };

        state.tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(state.tasks));
      }
    },
    changeStatus(state, targetId) {
      state.tasks = state.tasks.map((task) => {
        return task.id === targetId
          ? { ...task, checked: !task.checked }
          : task;
      });
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },

    changeTypeTasks(state, targetName) {
      if (targetName === "deleteCompleted") {
        state.tasks = state.tasks.filter((task) => !task.checked);
        localStorage.setItem("tasks", JSON.stringify(state.tasks));
        return (state.statusButton = "allTasks");
      }
      state.statusButton = targetName;
    },
  },
  state: {
    tasks: [],
    statusButton: "allTasks",
  },
  getters: {
    allTasks(state) {
      return state.tasks;
    },
    getStatuButton(state){
      return state.statusButton;
    },
  },
};
