import { mapGetters, mapActions } from "vuex";

export default {
    computed: {
        ...mapGetters({
            country_codes: "country/country_codes",
        })
    },
    methods: {
        ...mapActions({
            GET_COUNTRY_CODES: "country/GET_COUNTRY_CODES",
        }),
        /**
         * 
         * @param {*} country_code 
         * @returns country flag image url
         */
        getCountryFlag(country_code) {
            const flag_image_link = `https://flagcdn.com/48x36/${country_code}.png`;
            return flag_image_link;
        }
    }
}