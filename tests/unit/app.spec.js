import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import App from "../../../../src/components/atoms/App";

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


})

