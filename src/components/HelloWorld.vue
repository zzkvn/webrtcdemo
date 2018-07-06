<template>
  <div>
<script src="https://webrtc.github.io/adapter/adapter-latest.js"></script>
    <video autoplay playsinline ref="video"></video>
    <button v-on:click="takeSnapshot">Take snapshot</button>
    <button v-on:click="play">Play</button>
    <canvas ref="canvas"></canvas>
    <div>{{errMsg}}</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      constraints: {
        audio: false,
        video: true
      },
      errMsg: 'hehe'
    }
  },
  mounted: function () {
    this.$refs.canvas.width = 320
    this.$refs.canvas.height = 240
    this.errMsg = 'mounted'
    var gum = navigator.mediaDevices.getUserMedia(this.constraints)
    this.errMsg = "gum"
    gum.then(this.handleSuccess).catch(this.handleError)
    this.errMsg = "after gum"
  },
  methods: {
    handleSuccess: function (stream) {
      this.$refs.video.srcObject = stream
      this.errMsg = 'succes'
    },
    handleError: function (error) {
      this.errMsg = 'Error'
    },
    takeSnapshot: function () {
      console.log('button clicked')
      this.$refs.canvas.width = this.$refs.video.videoWidth
      this.$refs.canvas.height = this.$refs.video.videoHeight
      this.$refs.canvas.getContext('2d').drawImage(this.$refs.video, 0, 0, this.$refs.canvas.width, this.$refs.canvas.height)
    },
    play: function () {
      this.$refs.video.play()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
