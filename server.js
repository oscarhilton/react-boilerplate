const express = require("express");
const mongoose = require("mongoose");

var app = express();

app.use(express.static('public'));

app.listen(process.env.PORT, function(){
})

var mongoDB = process.env.MONGO_URL; // TODO: Sort this shit out
mongoose.connect(mongoDB);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open', function() {
  console.log("connected to mongoDB!");
});