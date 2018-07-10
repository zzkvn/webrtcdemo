<template>
    <div>
        <!--<script src="https://webrtc.github.io/adapter/adapter-latest.js"></script>-->
        <video autoplay playsinline ref="video"></video>
        <button v-on:click="takeSnapshot">Take snapshot</button>
        <button v-on:click="play">Play</button>
        <button v-on:click="pause">Pause</button>
        <canvas ref="canvas"></canvas>
        <div>{{errMsg}}</div>
    </div>
</template>

<script>
export default {
  name: 'GetUserMedia',
  data () {
    return {
      constraints: {
        audio: false,
        video: {width: {exact: 200}, height: {exact: 150}}
      },
      errMsg: ''
    }
  },
  mounted: function () {
    let canvas = this.$refs.canvas
    canvas.width = 200
    canvas.height = 150
    navigator.mediaDevices.getUserMedia(this.constraints).then(this.handleSuccess).catch(this.handleError)
  },
  methods: {
    handleSuccess: function (stream) {
      this.$refs.video.srcObject = stream
      this.errMsg = 'success'
    },
    handleError: function (error) {
      this.errMsg = error
    },
    takeSnapshot: function () {
      let canvas = this.$refs.canvas
      let video = this.$refs.video
      canvas.width = video.videoWidth
      canvas.height = video.videoHeight
      canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height)
    },
    play: function () {
      this.$refs.video.play()
    },
    pause: function () {
      this.$refs.video.pause()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
