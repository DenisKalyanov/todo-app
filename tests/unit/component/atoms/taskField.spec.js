import {mount} from "@vue/test-utils";
import TaskField from "../../../../src/components/atoms/TaskField";


describe ("unit tests for TaskField", ()=>{

    const wrapper = mount(TaskField);
           
    test("render a input",()=>{
        expect(wrapper.contains("input")).toBeTruthy();
    })
    
    test("The TaskField must be visible",()=>{
        expect(wrapper.isVisible()).toBe(true);
    })

    test('setData TaskField', async () => {
        await wrapper.setData({ newTask: 'NewTask1'})
        expect(wrapper.vm.newTask).toBe('NewTask1')
    })
})

