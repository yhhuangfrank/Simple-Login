//- require related module
const express = require("express");
const exphbs = require("express-handlebars");

//- parameter setting
const app = express();
const port = 3000;

//- set template engine
app.engine("hbs", exphbs.engine({ defaultLayout: "main", extname: "hbs" }));
app.set("view engine", "hbs");

//- set middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"))

//- set route
app.get("/", (req, res) => {
  return res.render("index");
});


//- listen to server
app.listen(port, () => {
  console.log(`Server is listening to http://localhost:${port}`);
});
