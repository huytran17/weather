const _ = require('lodash')
const { ActionTypes } = require("./action-types");
const { MutationTypes } = require("./mutation-types");

const actions = {
    async [ActionTypes.GET_COUNTRY_CODES]({ commit }, params = {}) {
        const country_codes = await this.$axios.get(process.env.COUNTRY_CODES_API);

        commit(MutationTypes.GET_COUNTRY_CODES, { data: country_codes });
    },
}

module.exports = actions;