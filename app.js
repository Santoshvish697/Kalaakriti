//jshint esversion:6

const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", function(req, res){
  res.render("index");
})

// app.post('/submitForm', (req, res) => {
//     const a = req.body.valueFromA;
//     const b = req.body.valueFromB
//     res.render('single',a);
// });

app.get("/contact", function(req, res){
  res.render("contact");
})

app.get("/about", function(req, res){
  res.render("about");
})

app.get("/services", function(req, res){
  res.render("services");
})

app.get("/single_1", function(req, res){
  res.render("single_1");
})

app.get("/single_2", function(req, res){
  res.render("single_2");
})

app.listen(3000, function(){
  console.log("Server is running on port 3000.");
})
