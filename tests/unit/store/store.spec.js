import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import storeConfig from './store.cfg'
import { cloneDeep } from 'lodash'

test('adding a new object to state', () => {
    const localVue = createLocalVue()
    localVue.use(Vuex)
    let arr = new Array;
    const store = new Vuex.Store(cloneDeep(storeConfig))

    expect(store.state.tasks.length).toBe(0);
    store.commit('createTask', "newTask")
    expect(store.state.tasks[0]).toBe({message: newTask, checked: false, id: 1})
})