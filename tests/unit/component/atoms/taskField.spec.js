import TaskField from "../../../../src/components/atoms/TaskField";
import { mount, shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe("unit tests for TaskField", () => {

    const wrapper = mount(TaskField);

    test("render a input", () => {
        expect(wrapper.contains("input")).toBeTruthy();
    })

    test("must be visible", () => {
        expect(wrapper.isVisible()).toBe(true);
    })

    test('setData', async () => {
        await wrapper.setData({ newTask: 'NewTask1' })
        expect(wrapper.vm.newTask).toBe('NewTask1')
    })
})

describe("unit tests for TaskField input", () => {

    const wrapper = mount(TaskField);

    test('setValue to input', async () => {

        const textInput = wrapper.find('input[type="text"]')
        await textInput.setValue('some value')
        expect(wrapper.find('input[type="text"]').element.value).toBe('some value')
    })
})

describe("unit tests for v-on handler", () => {
    const wrapper = mount(TaskField);

    test('setValue to data', async () => {

        const textInput = wrapper.find('input[type="text"]')
        await textInput.setValue('some value')
        wrapper.trigger('keydown.enter')
        expect(wrapper.vm.newTask).toBe('some value');
    })
})

// describe('TaskField.vue', () => {
//     let mutation;
//     let store;
//     beforeEach(() => {

//       mutation = {
//         createTask: jest.fn(),

//       }
//       store = new Vuex.Store({
//         mutation
//       })
//     })
//     it('call "createTask", when event is "enter"', () => {
//       const wrapper = shallowMount(TaskField, { store, localVue })
//       const input = wrapper.find('input');
//       input.element.value = 'input';
//       input.trigger('enter');
//       expect(mutation.createTask).toHaveBeenCalled();
//     })
// })

    // it('вызывает действие хранилища "actionClick" по нажатию кнопки', () => {
    //   const wrapper = shallowMount(Actions, { store, localVue })
    //   wrapper.find('button').trigger('click')
    //   expect(actions.actionClick).toHaveBeenCalled()
    // })
