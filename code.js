const express = require('express')
const app = express()
const starwar = require('./swap.json')
app.set("view engine", "ejs")
app.get('/starwar/', function(req, res) {
    number = starwar.count
    character = starwar.results
    res.render("starwar", character)
})
app.listen(3000, () => {
    console.log("Started to listen to port 3000")
})