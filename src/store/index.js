import Vue from "vue";
import Vuex from "vuex";
import text from "./modules/text"

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        text,
    }
});