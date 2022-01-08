import { mapGetters, mapActions } from "vuex";

export default {
    computed: {
        ...mapGetters({
            date: "datetime/date",
            time: "datetime/time"
        })
    },
    methods: {
        ...mapActions({
            GET_DATE: "datetime/GET_DATE",
            GET_TIME: "datetime/GET_TIME"
        })
    }
}