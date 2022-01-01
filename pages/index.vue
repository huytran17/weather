<template>
  <h1>Test</h1>
</template>

<script>
import axios from 'axios'
export default {
  created() {
    axios.get('/api/users').then((response) => {
      console.log(response)
    })
  },
}
</script>

<style></style>
