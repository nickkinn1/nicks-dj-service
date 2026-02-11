const express = require("express");
const ejs = require("ejs");

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.redirect("https://pinnacledj.com");
});

app.get("/qr-code", (req, res) => {
  res.redirect("https://pinnacledj.com");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("working");
});
