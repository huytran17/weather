const { MutationTypes } = require('./mutation-types')

const mutations = {
    [MutationTypes.SET_WEATHER](state, { data }) {
        state.weather = data;
    },

    [MutationTypes.SET_CITIES](state, { data }) {
        state.cities = data;
    },
}

module.exports = mutations;