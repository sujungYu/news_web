import Vue from 'vue'
import VueRouter from 'vue-router'
import NewsView from '../views/NewsView.vue';
import JobsView from '../views/JobsView.vue';
import AskView from '../views/AskView.vue';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
import createListView from '../views/CreateListView';
import bus from '../utils/bus.js'
import { store } from '../store/index.js'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path:'/',
            redirect: '/news'
        },
        {
            //path: url 주소
            path: '/news',
            name: 'news',
            //component: url 주수로 갔을 때 표시될 컴포넌트
            component: NewsView,
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                .then(() => {
                console.log('fetched');
                bus.$emit('end:spinner')
                next();
                // bus.$emit('end:spinner')
            })
            .catch((err) => {
                console.log(err);
            })
            }
            // component: createListView('NewsView')
        },
        {
            path: '/ask',
            name: 'ask',
            component: AskView,
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                .then(() => {
                console.log('fetched');
                // bus.$emit('end:spinner')
                next();
                // bus.$emit('end:spinner')
            })
            .catch((err) => {
                console.log(err);
            })
            }
            // component: createListView('AskView')
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView,
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                .then(() => {
                console.log('fetched');
                // bus.$emit('end:spinner')
                next();
                // bus.$emit('end:spinner')
            })
            .catch((err) => {
                console.log(err);
            })
            }
            // component: createListView('JobsView')
        },
        {
            path: '/user/:id',
            component: UserView
        },
        {
            path: '/item/:id',
            component: ItemView
        }
    ]
})