import Button from "../../../../src/components/atoms/Button";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);


describe("unit tests for Button", () => {
  const wrapper = shallowMount(Button);

  test("does it exist is button", () => {
    expect(wrapper.exists()).toBe(true);
  });

  test("contain a button", () => {
    expect(wrapper.contains("button")).toBeTruthy();
  });
});

describe("unit tests for Button", () => {
  const wrapper = shallowMount(Button, {
    propsData: {
      buttonName: "All",
      status: "allTasks",
    },
  });

  test("Are there props in button", () => {
    expect(wrapper.props().buttonName).toBe("All");
    expect(wrapper.props().status).toBe("allTasks");
  });
});

describe("unit tests for App", () => {
  let mutations;
  let store;

  beforeEach(() => {
    mutations = {
      changeTypeTasks: jest.fn(),
    };
    store = new Vuex.Store({
      mutations,
    });
  });

  test("contain a App", () => {
    const wrapper = shallowMount(Button, { store, localVue });

    wrapper.find("button").trigger("click");
    expect(mutations.changeTypeTasks).toHaveBeenCalled();
  });

});
