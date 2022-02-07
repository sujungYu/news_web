import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations.js'
import actions from './actions.js'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        news: [],
        jobs: [],
        ask: [],
        user: {},
        item: {},
        list: []
    },
    //  mutations: mutations,
    mutations,
    // actions: actions,
    actions,
    //computed와 동일한 속성인데 다만 store에 있는 것이다.
    getters: {
        fetchedAsk(state) {
            return state.ask
        },
        fetchedItem(state) {
            return state.item
        }
    },


})