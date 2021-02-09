import { shallowMount, createLocalVue } from "@vue/test-utils";
import TodosList from "../../../../src/components/organisms/TodosList";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);

describe ("unit tests for TodosList", ()=>{


    let getters;
    let store;

    beforeEach(() => {
        getters = {
            setState: jest.fn(),
        }
        store = new Vuex.Store({
            getters
        })
    })

    const wrapper = shallowMount(TodosList);
           
    test("render a div",()=>{
        expect(wrapper.contains("div")).toBeTruthy();
        expect(wrapper.contains("header-stub")).toBeTruthy();
        expect(wrapper.contains("content-stub")).toBeTruthy();
    })
})

