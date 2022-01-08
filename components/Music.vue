<template>
  <div id="music_wrapper">
    <vuetify-audio :file="file" color="light-blue" downloadable></vuetify-audio>
  </div>
</template>

<script>
export default {
  name: 'Music',
  data() {
    return {
      file: "https://www.mboxdrive.com/amthambenem.mp3",
      background: require('@/assets/images/music.jpg'),
    }
  },
  mounted() {
    const music_wrapper = document.getElementById('music_wrapper')

    music_wrapper.style.backgroundImage = `url(${this.background})`
  },
}
</script>

<style scoped>
#music_wrapper,
::v-deep .v-card {
  height: 100% !important;
}

::v-deep .v-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: none !important;
  background-color: transparent !important;
}
::v-deep .v-card__text p {
  color: #ffffff !important;
}
#music_wrapper {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 4px;
}
</style>
