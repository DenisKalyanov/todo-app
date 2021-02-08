import { shallowMount, createLocalVue } from "@vue/test-utils";
import Item from "../../../../src/components/molecules/Item";
import Vuex from "vuex";


const localVue = createLocalVue();

localVue.use(Vuex);

describe ("unit tests for Item", ()=>{

    let getters;
    let store;

    beforeEach(() => {
        getters = {
            
    choisenTasks: () => [
        {
            id: '',
            message: '',
            checked: true
        }
    ],
    }

    store = new Vuex.Store({
      getters
    })
  })


    test("contain a Item",()=>{
        const wrapper = shallowMount(Item, {store, localVue});
        expect(wrapper.contains("div")).toBeTruthy();
    })

    test("contain a Item of input",()=>{
        const wrapper = shallowMount(Item, {store, localVue});
        expect(wrapper.contains("input")).toBeTruthy();
    })


})
