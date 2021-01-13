import Vue from "vue";
import Vuex from "vuex";
import taskMethods from "./modules/taskMethods"

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        taskMethods,
    }
});