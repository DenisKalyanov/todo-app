import { shallowMount, createLocalVue } from "@vue/test-utils";
import TodosList from "../../../../src/components/organisms/TodosList";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("unit tests for TodosList", () => {

    const wrapper = shallowMount(TodosList);

    test("render a div", () => {
        expect(wrapper.contains("div")).toBeTruthy();
        expect(wrapper.contains("header-stub")).toBeTruthy();
        expect(wrapper.contains("content-stub")).toBeTruthy();
    })
})
