<template>
  <div>
    <v-card height="auto" elevation="0">
      <v-img class="white--text" :lazy-src="image_weather" :src="image_weather">
        <v-card-title>
          <v-img :src="icon_link" max-width="60" max-height="60" />
          <span class="text-sm-h4 text-h6">
            {{ celsius_degree }}&#176;C
            <span>{{ city_name }}</span>
            <span> - </span>
            <span>{{ country }}</span>
          </span>
        </v-card-title>
        <v-card-text class="pl-7">
          <v-row>
            <v-col cols="12" class="pt-0">
              <span class="description text-h6 font-weight-light primary--text">
                {{ description | capitalize }}
              </span>
            </v-col>
          </v-row>
          <v-row class="text-center">
            <v-col cols="6" sm="2">
              <div>
                <span>{{ lon }}</span>
              </div>
              <div>
                <span class="text-caption">kinh độ</span>
              </div>
            </v-col>
            <v-col cols="6" sm="2">
              <div>
                <span>{{ lat }}</span>
              </div>
              <div>
                <span class="text-caption">vĩ độ</span>
              </div>
            </v-col>
          </v-row>
          <v-row class="text-center">
            <v-col cols="6" sm="2">
              <div>
                <span>{{ temp_min }}&#176;C</span>
                <span>/</span>
                <span>{{ temp_max }}&#176;C</span>
              </div>
              <div>
                <span class="text-caption">thấp nhất/cao nhất</span>
              </div>
            </v-col>
            <v-col cols="6" sm="2">
              <div>
                <span>{{ humidity }}%</span>
              </div>
              <div>
                <span class="text-caption">độ ẩm</span>
              </div>
            </v-col>
            <v-col cols="6" sm="2">
              <div>
                <span>{{ feels_like }}%</span>
              </div>
              <div>
                <span class="text-caption">cảm giác</span>
              </div>
            </v-col>
            <v-col cols="6" sm="2">
              <div>
                <span>{{ pressure }} hPa</span>
              </div>
              <div>
                <span class="text-caption">áp suất khí quyển</span>
              </div>
            </v-col>
            <v-col cols="6" sm="2">
              <div>
                <span>{{ visibility }} km</span>
              </div>
              <div>
                <span class="text-caption">tầm nhìn</span>
              </div>
            </v-col>
            <v-col cols="6" sm="2">
              <div>
                <span>{{ clouds }} %</span>
              </div>
              <div>
                <span class="text-caption">có mây</span>
              </div>
            </v-col>
          </v-row>
          <v-row class="text-center">
            <v-col cols="6" sm="2">
              <div>
                <span>{{ wind_speed }} m/s</span>
              </div>
              <div>
                <span class="text-caption">tốc độ gió</span>
              </div>
            </v-col>
            <v-col cols="6" sm="2">
              <div>
                <span>{{ wind_deg }}&#176;</span>
              </div>
              <div>
                <span class="text-caption">hướng gió</span>
              </div>
            </v-col>
            <v-col cols="6" sm="2">
              <div>
                <span>{{ wind_gust }} m/s</span>
              </div>
              <div>
                <span class="text-caption">sức gió</span>
              </div>
            </v-col>
          </v-row>
          <v-row class="text-center">
            <v-col cols="6" sm="2">
              <div>
                <span>{{ sunrise }}</span>
              </div>
              <div>
                <span class="text-caption">mặt trời mọc</span>
              </div>
            </v-col>
            <v-col cols="6" sm="2">
              <div>
                <span>{{ sunset }}</span>
              </div>
              <div>
                <span class="text-caption">mặt trời lặn</span>
              </div>
            </v-col>
          </v-row>
        </v-card-text>
      </v-img>
    </v-card>
  </div>
</template>

<script>
import weatherMixins from '~/mixins/weather'

export default {
  name: 'Wheather',
  mixins: [weatherMixins],
  data() {
    return {
      image_weather: require('@/assets/images/weather.jpg'),
    }
  },
  async fetch() {
    try {
      await this.GET_WEATHER()
    } catch (e) {
      console.error(e)
    }
  },
}
</script>

<style scoped>
::v-deep .v-responsive__content {
  margin-bottom: auto;
}
.description {
  text-transform: capitalize;
}
</style>
