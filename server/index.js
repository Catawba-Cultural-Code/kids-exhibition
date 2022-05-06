const express = require('express')

const app = express()
const PORT = 3030

app.get('/api', (req, res) => {
  res.send('hello')
})
module.exports = () => {
  app.listen(PORT, (e) => {
    if (e) {
      console.error(e)
      return
    }
    console.log(`Listening on ${PORT}`)
  })
}
