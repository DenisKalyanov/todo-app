import TaskField from "../../../../src/components/atoms/TaskField";
import { mount, shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("TaskField.vue", () => {
  let store;
  let mutations;

  beforeEach(() => {
    mutations = {
      createTask: jest.fn(),
    };
    store = new Vuex.Store({
      mutations,
    });
  });

  it('call "createTask", when event is "enter"', () => {
    const wrapper = shallowMount(TaskField, { store, localVue });
    wrapper.find("input").trigger("keyup.enter");

    expect(mutations.createTask).toHaveBeenCalled();
  });
});

describe("unit tests for TaskField", () => {
  const wrapper = mount(TaskField);

  test("render a input", () => {
    expect(wrapper.contains("input")).toBeTruthy();
  });

  test("must be visible", () => {
    expect(wrapper.isVisible()).toBe(true);
  });

  test("setData", async () => {
    await wrapper.setData({ newTask: "NewTask1" });
    expect(wrapper.vm.newTask).toBe("NewTask1");
  });
});

describe("unit tests for TaskField input", () => {
  const wrapper = mount(TaskField);

  test("setValue to input", async () => {
    const textInput = wrapper.find('input[type="text"]');
    await textInput.setValue("some value");
    expect(wrapper.find('input[type="text"]').element.value).toBe("some value");
  });
});

describe("unit tests for v-on handler", () => {
  const wrapper = mount(TaskField);

  test("setValue to data", async () => {
    const textInput = wrapper.find('input[type="text"]');
    await textInput.setValue("some value");
    wrapper.trigger("keydown.enter");
    expect(wrapper.vm.newTask).toBe("some value");
  });
});
