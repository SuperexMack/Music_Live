const express = require("express")
const app = express()
require("dotenv").config()
const PORT = process.env.PORT
const cors = require('cors')
const userAuth = require("./users/userLogic")
console.log("The PORT is "  +  PORT)

app.use(cors())
app.use(express.json())

app.use("/v1" , userAuth)

app.listen(PORT , ()=>{
    console.log(`The server is running on the PORT number ${PORT}`)
})