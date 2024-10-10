const express = require('express')
const app = express()
const port = 8080
const getCatCall = require('./catCall')

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.post('/', (req, res) => {
  try {
    res.send('Got a POST Request')
    getCatCall()
  } catch (err) {
    console.log(`Error: ${err}`)
  }
})

app.listen(port, ()=> {
  console.log(`Listening on port ${port}`)
})