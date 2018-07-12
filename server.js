'use strict'
var express = require('express')
var fs = require('fs')
var https = require('https')
var IO = require('socket.io')
var app = express()
const options = {
  key: fs.readFileSync('C:\\Miscellaneous\\Downloads\\1529919890194\\1529919890194.key'),
  cert: fs.readFileSync('C:\\Miscellaneous\\Downloads\\1529919890194\\public.pem')
}
// app.use((req, res) => {
//   res.send('Hello there !')
// })
app.use(express.static('dist'))

var server = https.createServer(options, app)
server.listen(8443)
console.log('HTTPS listening on 8443')

var io = IO(server)

var allUsers = {}
var allSockets = {}

io.on('connect', function (socket) {
  var user = ''
  console.log('A user connected..')
  socket.on('message', function (data) {
    console.log('Got a message from [' + data.username + ']: ' + data.message)
    io.emit('message', data)
  })
})
