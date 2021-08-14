//jshint esversion:6

//App setup: getting packages
const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

//App setup: using packages
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

//App setup: database
mongoose.connect("mongodb://localhost:27017/bucketsDB", {useNewUrlParser: true});
mongoose.set('useCreateIndex', true);

// const paymentsSchema = new mongoose.schema({
//     description: String,
//     amount: Number,
//     frequency: String
// });
//
// const bucketsSchema = new mongoose.schema({
//     title: String,
//     type: String,
//     total: Number,
//     transactions: [paymentSchema]
// });
//
// const payment = mongoose.model("Payment", paymentsSchema);
//
// const bucket = mongoose.model("Bucket", bucketsSchema);

//Routing
app.get("/", function(req, res) {
    res.render("home");
});


//Listening
app.listen(3000, console.log("app started on port 3000"));
