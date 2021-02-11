import { shallowMount, createLocalVue, mount } from "@vue/test-utils";
import Item from "../../../../src/components/molecules/Item";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);

let store;
let mutations;
let getters;

beforeEach(() => {
  mutations = {
    changeStatus: jest.fn(),
  };
  getters = {
    chosenTasks: () => [
      {
        id: "1",
        message: "1",
        checked: true,
      },
      {
        id: "2",
        message: "2",
        checked: true,
      },
    ],
  };
  store = new Vuex.Store({
    mutations,
    getters,
  });
});

// describe("unit tests for Item", () => {

//   test("contain a Item", () => {
//     const wrapper = shallowMount(Item, { store, localVue });
//     expect(wrapper.contains("div")).toBeTruthy();
//   });

//   test("contain a Item of input", () => {
//     const wrapper = shallowMount(Item, { store, localVue });
//     expect(wrapper.contains("input")).toBeTruthy();
//   });
// });

// describe("unit tests for Item input type checked", () => {

//   test("setChecked", async () => {
//     const wrapper = shallowMount(Item, { store, localVue });
//     const checkboxInput = wrapper.find('input[type="checkbox"]');

//     await checkboxInput.setChecked();
//     expect(checkboxInput.element.checked).toBeTruthy();
//   });
// });

// describe("Item.vue", () => {
//   it('call "changeStatus", when event is "click"', () => {
//     const wrapper = mount(Item, { store, localVue });
//     wrapper.find('input[type="checkbox"]').trigger("change");
//     expect(mutations.changeStatus).toHaveBeenCalled();
//   });
// });

describe("Item.vue", () => {
  it("check, is working function for render List", () => {
    const wrapper = mount(Item, { store, localVue });
   
    expect(getter.filteredTasks).toHaveBeenCalled();
  });
});
