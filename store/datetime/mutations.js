const { MutationTypes } = require('./mutation-types')

const mutations = {
    [MutationTypes.SET_DATE](state, { data }) {
        state.date = data;
    },

    [MutationTypes.SET_TIME](state, { data }) {
        state.time = data;
    },
}

module.exports = mutations;