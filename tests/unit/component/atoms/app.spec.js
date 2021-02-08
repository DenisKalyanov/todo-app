import {mount} from "@vue/test-utils";
import Header from "../../../../src/components/atoms/Header";


describe ("unit tests for Header", ()=>{

    const wrapper = mount(Header);
           
    test("render a h1",()=>{
        expect(wrapper.contains("h1")).toBeTruthy();
    })
    
    test("The header must be visible",()=>{
        expect(wrapper.isVisible()).toBe(true);
    })
})

