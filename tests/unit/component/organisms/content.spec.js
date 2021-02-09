import { shallowMount, createLocalVue } from "@vue/test-utils";
import Content from "../../../../src/components/organisms/Content";
import Vuex from "vuex";


const localVue = createLocalVue();
localVue.use(Vuex);

describe("unit tests for Content", () => {

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

    const wrapper = shallowMount(Content);

    test("rendering components inside Content", () => {
        expect(wrapper.contains("div")).toBeTruthy();
    })
})