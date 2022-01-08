<template>
  <div class="container">
    <v-row>
      <v-col cols="12">
        <Weather />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6">
        <DateTime />
      </v-col>
      <v-col cols="12" sm="6">
        <Music />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <Video />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Weather from '@/components/Weather'
import DateTime from '@/components/DateTime'
import Video from '@/components/Video'
import Music from '@/components/Music'

export default {
  name: 'AppIndex',
  components: { Weather, DateTime, Video, Music },
}
</script>

<style></style>
