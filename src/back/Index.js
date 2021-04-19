if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
  }

const express = require("express") // our express server
const app = express() // generate an app object
const bodyParser = require("body-parser") // requiring the body-parser
const PORT = process.env.PORT || 3001 // port that the server is running on => localhost:3000
app.use(bodyParser.json()) // telling the app that we are going to use json to handle incoming payload

app.listen(PORT, () => {
  // listening on port 3000
  console.log(`listening on port ${PORT}`) // print this when the server starts
})