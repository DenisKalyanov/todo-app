import { shallowMount, createLocalVue } from "@vue/test-utils";
import Item from "../../../../src/components/molecules/Item";
import Vuex from "vuex";


const localVue = createLocalVue();

localVue.use(Vuex);

describe("unit tests for Item", () => {

    let getters;
    let store;

    beforeEach(() => {
        getters = {

            chosenTasks: () => [
                {
                    id: '1',
                    message: '1',
                    checked: true
                },
                {
                    id: '2',
                    message: '2',
                    checked: true
                }
            ],
        }

        store = new Vuex.Store({
            getters
        })
    })


    test("contain a Item", () => {
        const wrapper = shallowMount(Item, { store, localVue });
        expect(wrapper.contains("div")).toBeTruthy();
    })

    test("contain a Item of input", () => {
        const wrapper = shallowMount(Item, { store, localVue });
        expect(wrapper.contains("input")).toBeTruthy();
    })
})

describe("unit tests for Item input type checked", () => {
    let getters;
    let store;

    beforeEach(() => {
        getters = {

            chosenTasks: () => [
                {
                    id: '1',
                    message: '1',
                    checked: true
                },
                {
                    id: '2',
                    message: '2',
                    checked: true
                }
            ],
        }

        store = new Vuex.Store({
            getters
        })
    })

    test('setChecked', async () => {
        const wrapper = shallowMount(Item, { store, localVue });
        const checkboxInput = wrapper.find('input[type="checkbox"]')

        await checkboxInput.setChecked()
        expect(checkboxInput.element.checked).toBeTruthy()
    })

})
