const express = require("express");
const ejs =require('ejs');
const path = require("path");

const app = express();
//TEMPLATE ENGİNE
app.set("view engine", "ejs");

// MIDDLEWARES
app.use(express.static("public"));
// ROUTES
app.get("/", (req, res) => {
  // dosyayo içeri çektik
  // express static middleware kullandık
  //res.sendFile(path.resolve(__dirname, "tmp/index.html"));
  res.render('index')
});
app.get("/about", (req, res) => {
  res.render('about')
});
app.get("/post", (req, res) => {
  res.render('post')
});
app.get("/contact", (req, res) => {
  res.render('contact')
});
const port = 3000;
app.listen(port, () => {
  console.log(`sunucu ${port} portunda başlatıldı`);
});