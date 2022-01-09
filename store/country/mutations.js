const { MutationTypes } = require('./mutation-types')

const mutations = {
    [MutationTypes.GET_COUNTRY_CODES](state, { data }) {
        state.country_codes = data;
    },

    [MutationTypes.GET_COUNTRY_FLAGS](state, { data }) {
        state.country_flags = data;
    },
}

module.exports = mutations;