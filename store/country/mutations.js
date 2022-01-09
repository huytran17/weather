const { MutationTypes } = require('./mutation-types')

const mutations = {
    [MutationTypes.GET_COUNTRY_CODES](state, { data }) {
        state.country_codes = data;
    },
}

module.exports = mutations;