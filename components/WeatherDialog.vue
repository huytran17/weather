<template>
  <div>
    <v-dialog v-model="open_dialog" max-width="500px" persistent>
      <v-card>
        <v-card-title>Chọn thành phố</v-card-title>
        <v-card-text>
          <v-autocomplete
            :value="city_id"
            @input="updateCity($event)"
            :items="cities"
            item-text="name"
            item-value="id"
            return-object
          ></v-autocomplete>
        </v-card-text>
        <v-card-actions class="pt-0">
          <v-btn color="primary" class="ml-auto" text @click="closeDialog"
            >Đóng</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import weatherMixins from '@/mixins/weather'

export default {
  name: 'WeatherDialog',
  props: {
    open_dialog: {
      type: Boolean,
      required: true,
      default() {
        return false
      },
    },
  },
  mixins: [weatherMixins],
  methods: {
    closeDialog() {
      this.$emit('close-dialog', false)
    },
    async updateCity(city) {
      try {
        const { id, name } = city
        this.SET_CITY_ID({ data: id })
        this.SET_CITY_NAME({ data: name })
        await this.GET_WEATHER({ city_id: id })
      } catch (e) {
        console.error(e)
      }
    },
  },
  async fetch() {
    try {
      await this.GET_CITIES()
    } catch (e) {
      console.error(e)
    }
  },
}
</script>

<style></style>
