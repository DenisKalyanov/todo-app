import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import App from "../../../../src/components/atoms/App";

const localVue = createLocalVue()
localVue.use(Vuex)

describe ("unit tests for App", ()=>{

    const wrapper = shallowMount(App);
           
    test("render a h1",()=>{
        expect(wrapper.contains("h1")).toBeTruthy();
    })
})

