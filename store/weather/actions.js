const _ = require('lodash')
const { ActionTypes } = require("./action-types");
const { MutationTypes } = require("./mutation-types");

const actions = {
    async [ActionTypes.GET_WEATHER]({ commit }, params = {}) {
        const city_id = _.get(params, 'city_id', "1581129");
        const { data } = await this.$axios.get(
            `https://api.openweathermap.org/data/2.5/weather?id=${city_id}&appid=${process.env.WEATHER_API_KEY}`
        );

        commit(MutationTypes.SET_WEATHER, { data });
    },

    async [ActionTypes.GET_CITIES]({ commit }, params = {}) {
        const { data } = await this.$axios.get(
            process.env.WEATHER_CITIES
        );

        commit(MutationTypes.SET_CITIES, { data });
    }
}

module.exports = actions;