import { createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import storeConfig from "./store.cfg";
import { cloneDeep } from "lodash";

describe("unit tests action state", () => {
  test("set state used action", () => {
    const localVue = createLocalVue();
    localVue.use(Vuex);
    const store = new Vuex.Store(cloneDeep(storeConfig));
    store.dispatch("setState");
    expect(store.state.tasks.length).toBe(0);
  });
});

describe("unit tests mutation state", () => {
  test("adding a new object to state ", () => {
    const localVue = createLocalVue();
    localVue.use(Vuex);

    const store = new Vuex.Store(cloneDeep(storeConfig));
    let newTask = "newTodo";
    expect(store.state.tasks.length).toBe(0);
    expect(!!localStorage.getItem("tasks")).toBe(false);

    store.commit("createTask", newTask);
    expect(store.state.tasks[0].message).toBe("newTodo");
    expect(store.state.tasks[0].checked).toBe(false);
    expect(store.state.tasks[0].id).toBeTruthy();
    expect(store.state.tasks.length).toBe(1);
    expect(!!localStorage.getItem("tasks")).toBe(true);
  });

  test("change ckecked flag", () => {
    const localVue = createLocalVue();
    localVue.use(Vuex);
    const store = new Vuex.Store(cloneDeep(storeConfig));

    let newTask = "newTask";
    store.commit("createTask", newTask);

    let id = store.state.tasks[0].id;
    let checked = store.state.tasks[0].checked;

    store.commit("changeStatus", id);
    expect(store.state.tasks[0].checked).toBe(!checked);
  });

  test("clear completed tasks", () => {
    const localVue = createLocalVue();
    localVue.use(Vuex);
    const store = new Vuex.Store(cloneDeep(storeConfig));

    let newTask = "newTask";
    store.commit("createTask", newTask);
    store.state.tasks[0].checked = true;

    const nameButtonForDelete = "deleteCompleted";

    store.commit("changeTypeTasks", nameButtonForDelete);
    expect(store.state.tasks.length).toBe(0);
    expect(store.state.statusButton).toBe("allTasks");
  });

  test("check how working button for change statusButto name", () => {
    const localVue = createLocalVue();
    localVue.use(Vuex);
    const store = new Vuex.Store(cloneDeep(storeConfig));

    let newTask = "newTask";
    store.commit("createTask", newTask);

    const nameButtonCompleted = "completedTasks";
    const nameButtonActive = "activeTasks";

    store.commit("changeTypeTasks", nameButtonCompleted);
    expect(store.state.statusButton).toBe("completedTasks");

    store.commit("changeTypeTasks", nameButtonActive);
    expect(store.state.statusButton).toBe("activeTasks");
  });
});

describe("unit tests getters state", () => {
  test("get state and statusButton", () => {
    const localVue = createLocalVue();
    localVue.use(Vuex);

    const store = new Vuex.Store(cloneDeep(storeConfig));

    let newTask = "newTodo";
    store.commit("createTask", newTask);

    store.state.statusButton = "allTasks";

    expect(store.getters.getStatuButton).toBe("allTasks");
    expect(store.getters.allTasks).toBe(store.state.tasks);
  });
});
