import { mapGetters, mapActions } from "vuex";

export default {
    computed: {
        ...mapGetters({
            country_codes: "country/country_codes",
            country_flags: "country/country_flags",
        })
    },
    methods: {
        ...mapActions({
            GET_COUNTRY_CODES: "country/GET_COUNTRY_CODES",
            GET_COUNTRY_FLAGS: "country/GET_COUNTRY_FLAGS"
        })
    }
}