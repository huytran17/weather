<template>
  <div>
    <v-card elevation="0">
      <v-img
        class="white--text"
        :lazy-src="image_datetime"
        :src="image_datetime"
      >
        <v-card-title>
          <div class="d-flex flex-column">
            <div>
              <span>{{ date }} </span>
            </div>
            <div>
              <span>{{ time }} </span>
            </div>
          </div>
        </v-card-title>
        <div class=" pb-5 d-flex justify-center">
          <clock :time="time" border="1px solid #4CAF50" color="#000000" bg="#ffffff"></clock>
        </div>
      </v-img>
    </v-card>
  </div>
</template>

<script>
import datetimeMixin from '@/mixins/datetime'

export default {
  name: 'DateTime',
  mixins: [datetimeMixin],
  data() {
    return {
      image_datetime: require('@/assets/images/datetime.jpg'),
    }
  },
  created() {
    setInterval(async () => {
      await this.GET_TIME()
    }, 1000)
  },
  async fetch() {
    try {
      await this.GET_DATE()
      await this.GET_TIME()
    } catch (e) {
      console.error(e)
    }
  },
}
</script>

<style scoped>
</style>
