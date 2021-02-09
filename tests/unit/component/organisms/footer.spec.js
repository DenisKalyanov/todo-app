import { shallowMount, createLocalVue } from "@vue/test-utils";
import Footer from "../../../../src/components/organisms/Footer";
import Vuex from "vuex";


const localVue = createLocalVue();
localVue.use(Vuex);

describe ("unit tests for Footer", ()=>{

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

    const wrapper = shallowMount(Footer);
    console.log(wrapper.html())
    test("rendering components inside Footer",()=>{
        expect(wrapper.contains("div")).toBeTruthy();
        expect(wrapper.contains("statusbuttons-stub")).toBeTruthy();
        expect(wrapper.contains("button-stub")).toBeTruthy();
    })
})
