import { fetchNewsList, fetchAskList, fetchJobsList, fetchUserInfo, fetchItemInfo, fetchList } from '../api/index.js';

export default {
    //promise
    /*FETCH_LIST({ commit }, pageName) {
        return fetchList(pageName)
            .then(({ data }) => {
                commit('SET_LIST', data);
            })
            .catch(error => console.log(error))
    },*/
    //async
    async FETCH_LIST({ commit }, pageName) {
        try {
            const response = await fetchList(pageName);
            commit('SET_LIST', response.data);
            return response;
        }catch(error){
            console.log(error);
        }
    },

    async FETCH_USER({ commit }, name) {
        const response = await fetchUserInfo(name);
        commit('SET_USER', response.data);
        return response;
    },

    async FETCH_ITEM({ commit }, id) {
        const response = await fetchItemInfo(id);
        commit('SET_ITEM', response.data);
        return response;
    },
}
