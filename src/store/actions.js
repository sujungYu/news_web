import { fetchNewsList, fetchJobsList, fetchAskList } from '../api/index.js'
export default {
    FETCH_NEWS(context) {
            fetchNewsList()
            .then(res => {
                console.log(res.data);
                context.commit('SET_NEWS', res.data)
            })
            .catch(err => {
                console.log(err);
            })
        },
        FETCH_JOBS({ commit }) {
            fetchJobsList()
            .then(({ data }) => {
                console.log(data);
                commit('SET_JOBS', data)
            })
            .catch(err => {
                console.log(err);
            })
        },
        FETCH_ASK({ commit }) {
            fetchAskList()
            .then(({ data }) => {
                console.log(data);
                commit('SET_ASK', data)
            })
            .catch(err => {
                console.log(err);
            })
        }
}