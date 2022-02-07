import { fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo, fetchAskItem, fetchList} from '../api/index.js'
export default {
    //promise
    // FETCH_NEWS(context) {
    //         return fetchNewsList()
    //         .then(res => {
    //             console.log(res.data);
    //             context.commit('SET_NEWS', res.data);
    //             return res;
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })
    //     },
        //async
        async FETCH_NEWS(context) {
            const response = await fetchNewsList();
            context.commit('SET_NEWS', response.data);
            //return을 안하게 되면 화면에서의 비동기 순서를 보장할 수 없다.
            return response;
        },
        //promise
        // FETCH_JOBS({ commit }) {
        //     return fetchJobsList()
        //     .then(({ data }) => {
        //         console.log(data);
        //         commit('SET_JOBS', data)
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     })
        // },
        //async
        async FETCH_JOBS({ commit }) {
            try {
                const response = await fetchJobsList();
                commit('SET_ASK', response.data)
                return response
            } catch(error) {
                console.log(error);
            }


        },
        //promise
        // FETCH_ASK({ commit }) {
        //     return fetchAskList()
        //     .then(({ data }) => {
        //         console.log(data);
        //         commit('SET_ASK', data)
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     })
        // },
        //async
        async FETCH_ASK({ commit }) {
            const response = await fetchAskList();
            commit('SET_ASK', response.data)
            return response

        },
        FETCH_USER({ commit }, name) {
            return fetchUserInfo(name)
            .then(({ data }) => {
                console.log(data);
                commit('SET_USER', data)
            })
            .catch(err => {
                console.log(err);
            })

        },
        FETCH_ITEM({ commit }, item) {
            return fetchAskItem(item)
            .then(({ data }) => {
                console.log(data);
                commit('SET_ITEM', data)
            })
            .catch(err => {
                console.log(err);
            })
        },
        //promise
        // FETCH_LIST({ commit }, pageName) {
        //    return fetchList(pageName)
        //     .then(({ data }) => {
        //         console.log(4);
        //         commit('SET_LIST', data)})
        //     .catch(err => console.log(err))
        // }
        //async
        async FETCH_LIST({ commit }, pageName) {
           try {
               const response =  await fetchList(pageName)
               commit('SET_LIST', response.data)
           } catch (error) {
               console.log(error);
           }
        }


}