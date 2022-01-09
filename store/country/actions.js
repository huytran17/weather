const _ = require('lodash')
const { ActionTypes } = require("./action-types");
const { MutationTypes } = require("./mutation-types");

const actions = {
    async [ActionTypes.GET_COUNTRY_CODES]({ commit }, params = {}) {
        const country_codes = await this.$axios.get(process.env.COUNTRY_CODES_API);

        commit(MutationTypes.GET_COUNTRY_CODES, { data: country_codes });
    },

    async [ActionTypes.GET_COUNTRY_FLAGS]({ commit }, params = {}) {
        const country_code = _.get(params, "country_code", "vi");

        const country_flags = await this.$axios.get(`https://flagcdn.com/16x12/${country_code}.png`);

        commit(MutationTypes.GET_COUNTRY_FLAGS, { data: country_flags });
    }
}

module.exports = actions;