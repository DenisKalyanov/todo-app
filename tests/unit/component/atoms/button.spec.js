import {mount} from "@vue/test-utils";
import Button from "../../../../src/components/atoms/Button";


describe ("unit tests for Button", ()=>{

    const wrapper = mount(Button);

     test("does it exist is button", ()=>{
        expect(wrapper.exists()).toBe(true);
    })

    test("contain a button",()=>{
        expect(wrapper.contains("button")).toBeTruthy();
    })
})

describe ("unit tests for Button", ()=>{

    const wrapper = mount(Button, {
        propsData: {
          buttonName:'All',
          status:'allTasks'
        }
      })

    test("Are there props in button",()=>{
        expect(wrapper.props().buttonName).toBe('All');
        expect(wrapper.props().status).toBe('allTasks');
    })
})


