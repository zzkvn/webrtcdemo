<template>
  <div class="about">
    <h1>This is an online chat room page</h1>
    <textarea v-model="messages" cols="50" rows="10" readonly></textarea><br/>
    Your name: <input type="text" v-model="username" required/><br/>
    <input type="text" v-model="message" required/>
    <button v-on:click="sendMessage">Send</button>
  </div>
</template>
<script>
const socket = io()
export default {
  name: 'Room',
  data () {
    return {
      message: '',
      username: '',
      messages: ''
    }
  },
  mounted () {
    socket.on('message', data => {
      console.log('Got broadcast message from [' + data.username + ']: ' + data.message)
      this.messages += data.username + ": " + data.message + '\n'
    })
  },
  methods: {
    sendMessage: function () {
      if (this.username === '' || this.message === '') {
        alert('please input username and message')
      } else {
        socket.emit('message', {
          username: this.username,
          message: this.message
        })
        this.message = ''
      }
    }
  }
}
</script>
