const express = require('express')
const app = express()


//doteenv
require('dotenv').config()
const port = process.env.PORT || 3000

//db
require("./src/config/db")


//bodyparse
const bodyParser = require('body-parser')
app.use(bodyParser.json())


//cors
const cors = require('cors')
app.use(cors())

//router
const router=require("./src/router/router")
app.use('/',router)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})