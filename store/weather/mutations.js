const { MutationTypes } = require('./mutation-types')

const mutations = {
    [MutationTypes.SET_WEATHER](state, { data }) {
        state.weather = data;
    },
}

module.exports = mutations;