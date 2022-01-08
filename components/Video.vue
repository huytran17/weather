<template>
  <vue-plyr>
    <div class="plyr__video-embed">
      <iframe
        src="https://www.youtube.com/watch?v=kJQP7kiw5Fk&list=RD1ZRb1we80kM&index=2&ab_channel=LuisFonsiVEVO"
        allowfullscreen
        allowtransparency
        allow="autoplay"
      ></iframe>
    </div>
  </vue-plyr>
</template>

<script>
export default {
  name: 'Music',
  data() {
    return {
      image: require('@/assets/images/datetime.jpg'),
    }
  },
}
</script>

<style></style>
