const express = require("express");
const animeController = require("./animeController");

const app = express()

app.use(express.json())
app.use(animeController);

app.listen(() => {
    console.log("server running on port 5000\nhttp://localhost:5000")
}, 5000)