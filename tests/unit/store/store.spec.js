import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import storeConfig from './store.cfg'
import { cloneDeep } from 'lodash'

test('adding a new object to state', () => {
    const localVue = createLocalVue()
    localVue.use(Vuex)
    // 
    const store = new Vuex.Store(cloneDeep(storeConfig))
    let newTask = "newTAsk";
    expect(store.state.tasks.length).toBe(0);

    store.commit('createTask', newTask)
    expect(store.state.tasks[0]).toBe({ message: newTask, checked: false, id: 1})
    // https://vue-test-utils.vuejs.org/ru/guides/#%D1%82%D0%B5%D1%81%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-vuex-%D0%B2-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D0%B0%D1%85
}) 
