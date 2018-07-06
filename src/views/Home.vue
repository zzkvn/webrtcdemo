<template>
  <div>
    <GetUserMedia/>
  </div>
</template>

<script>
// @ is an alias to /src
import GetUserMedia from '@/components/GetUserMedia.vue'

export default {
  name: 'home',
  components: {
    GetUserMedia
  }
}
</script>
