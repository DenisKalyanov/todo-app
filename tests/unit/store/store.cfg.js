import vuex from "../../../src/store/modules/taskMethods";

export default {
    state: {
        tasks: [],
        statusButton: "allTasks",
    },
    actions : vuex.actions,
    mutations: vuex.mutations,
    getters: vuex.getters
}
