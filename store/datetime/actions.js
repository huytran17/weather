const _ = require('lodash')
const { ActionTypes } = require("./action-types");
const { MutationTypes } = require("./mutation-types");

const actions = {
    async [ActionTypes.GET_DATE]({ commit }, params = {}) {
        const date = await this.$moment().format('LL');

        commit(MutationTypes.SET_DATE, { data: date });
    },

    async [ActionTypes.GET_TIME]({ commit }, params = {}) {
        const time = await this.$moment().format('LTS');

        commit(MutationTypes.SET_TIME, { data: time });
    }
}

module.exports = actions;