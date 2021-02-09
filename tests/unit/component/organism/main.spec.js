import { shallowMount, createLocalVue } from "@vue/test-utils";
import Main from "../../../../src/components/organisms/Main";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);

describe ("unit tests for Main", ()=>{

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

    const wrapper = shallowMount(Main);
    test("render a div",()=>{
        expect(wrapper.contains("item-stub")).toBeTruthy();
    })
})

