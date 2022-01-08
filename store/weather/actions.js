const _ = require('lodash')
const { ActionTypes } = require("./action-types");
const { MutationTypes } = require("./mutation-types");

const actions = {
    async [ActionTypes.GET_WEATHER]({ commit, state }, params = {}) {
        const { data } = await this.$axios.get(
            process.env.WEATHER_API
        );

        commit(MutationTypes.SET_WEATHER, { data });
    }
}

module.exports = actions;