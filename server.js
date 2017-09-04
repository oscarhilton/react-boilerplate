const express = require("express");
// const mongoose = require("mongoose");

var app = express();

app.use(express.static('public'));

app.listen(process.env.PORT, function(){
})



// MongoDB
// var mongoDB = 'mongodb://' + process.env.IP + ":27017"; // RUN: '  ./mongod  '
// mongoose.connect(mongoDB);

// var db = mongoose.connection;

// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// db.once('open', function() {
//   console.log("connected to mongoDB!");
// });