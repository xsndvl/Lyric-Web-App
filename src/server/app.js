const express = require('express')
const getCatCall = require('./catCall')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.post('/', async (req, res) => {
  try {
    res.send('Got a POST Request')
    // const catFact = await getCatCall()
    console.log(`catFact: ${catFact}`)
  } catch (err) {
    console.log(`Error: ${err}`)
  }
})

app.listen(port, ()=> {
  console.log(`Listening on port ${port}`)
})