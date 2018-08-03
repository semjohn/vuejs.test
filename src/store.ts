import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        email: ''

    },

    mutations: {
        login (state, le) {
            state.email = le;
        }
    }
})
