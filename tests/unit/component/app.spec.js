import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import App from "../../../src/App";

const localVue = createLocalVue()
localVue.use(Vuex)

describe ("unit tests for App", ()=>{

    let actions;
    let store;

    beforeEach(() => {
        actions = {
            setState: jest.fn(),
        }
        store = new Vuex.Store({
          actions
        })
      })


      test("contain a App",()=>{
        const wrapper = shallowMount(App, {store, localVue});
        expect(wrapper.contains("div")).toBeTruthy();
      })


})

