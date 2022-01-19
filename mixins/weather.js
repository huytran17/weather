import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
    computed: {
        ...mapGetters({
            weather: "weather/weather",
            k_to_c: "weather/k_to_c",
            m_to_km: "weather/m_to_km",
            cities: "weather/cities",
            city_id: "weather/city_id",
            city_name: "weather/city_name",
        }),
        weather_data() {
            return _.get(this.weather, 'weather[0]', null)
        },
        celsius_degree() {
            return this.round(_.get(this.weather, "main.temp", 0) + this.k_to_c)
        },
        temp_min() {
            return this.round(_.get(this.weather, "main.temp_min", 0) + this.k_to_c)
        },
        temp_max() {
            return this.round(_.get(this.weather, "main.temp_max", 0) + this.k_to_c)
        },
        humidity() {
            return this.round(_.get(this.weather, "main.humidity", 0))
        },
        visibility() {
            return this.round(_.get(this.weather, "visibility", 0) / this.m_to_km)
        },
        feels_like() {
            return this.round(_.get(this.weather, "main.feels_like", 0) + this.k_to_c)
        },
        pressure() {
            return this.round(_.get(this.weather, "main.pressure", 0))
        },
        icon_link() {
            const icon = _.get(this.weather_data, "icon", "")

            if (icon)
                return `http://openweathermap.org/img/wn/${icon}@2x.png`
        },
        clouds() {
            return _.get(this.weather, "clouds.all", 0)
        },
        description() {
            return _.get(this.weather_data, "description", "")
        },
        lon() {
            return _.get(this.weather, "coord.lon", 0)
        },
        lat() {
            return _.get(this.weather, "coord.lat", 0)
        },
        wind_speed() {
            return _.get(this.weather, "wind.speed", 0)
        },
        wind_deg() {
            return _.get(this.weather, "wind.deg", 0)
        },
        wind_gust() {
            return _.get(this.weather, "wind.gust", 0)
        },
        country() {
            return _.get(this.weather, "sys.country", 0)
        },
        sunrise() {
            const unix_timestamp = _.get(this.weather, "sys.sunrise", 0);
            const { hours, minutes, seconds } = this.unixToTime(unix_timestamp)

            return `${hours}:${minutes}:${seconds}`
        },
        sunset() {
            const unix_timestamp = _.get(this.weather, "sys.sunset", 0);
            const { hours, minutes, seconds } = this.unixToTime(unix_timestamp)

            return `${hours}:${minutes}:${seconds}`
        },
    },
    methods: {
        ...mapActions({
            GET_WEATHER: "weather/GET_WEATHER",
            GET_CITIES: "weather/GET_CITIES",
        }),
        ...mapMutations({
            SET_CITY_ID: "weather/SET_CITY_ID",
            SET_CITY_NAME: "weather/SET_CITY_NAME",
        }),
        round(value) {
            return Math.round(value)
        },
        unixToTime(unix_timestamp) {
            const date = new Date(unix_timestamp * 1000);
            let hours = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();

            if (minutes < 10) minutes = `0${minutes}`
            if (seconds < 10) seconds = `0${seconds}`

            return { hours, minutes, seconds }
        },
    },
    filters: {
        capitalize: function (value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    }
}