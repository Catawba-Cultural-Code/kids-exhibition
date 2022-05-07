const express = require('express')
const { createServer } = require('http')
const { Server } = require('socket.io')

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer, {
  /* options */
})
// https://www.fullstacklabs.co/blog/chat-application-react-express-socket-io
io.on('connection', (socket) => {
  socket.emit('fromAPI', { msg: 'tanake' })
  socket.on('disconnect', () => console.log('client disconnected'))
})

module.exports = (PORT) => {
  httpServer.listen(PORT)
  // app.listen(PORT, (e) => {
  //   if (e) {
  //     console.error(e)
  //     return
  //   }
  //   console.log(`Listening on ${PORT}`)
  // })
}
