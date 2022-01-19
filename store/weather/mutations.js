const { MutationTypes } = require('./mutation-types')

const mutations = {
    [MutationTypes.SET_WEATHER](state, { data }) {
        state.weather = data;
    },

    [MutationTypes.SET_CITIES](state, { data }) {
        state.cities = data;
    },

    [MutationTypes.SET_CITY_ID](state, { data }) {
        state.city_id = data;
    },

    [MutationTypes.SET_CITY_NAME](state, { data }) {
        state.city_name = data;
    },
}

module.exports = mutations;