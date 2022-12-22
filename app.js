//- require related module
const express = require("express");
const exphbs = require("express-handlebars");
const session = require("express-session");
const accountValidator = require("./accountValidator");

//- parameter setting
const app = express();
const port = 3000;

//- set template engine
app.engine("hbs", exphbs.engine({ defaultLayout: "main", extname: "hbs" }));
app.set("view engine", "hbs");

//- set middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(
  session({
    secret: "SESSION_SECRET",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
  })
);

//- set route
app.get("/", (req, res) => {
  return res.render("index");
});

app.post("/login", (req, res) => {
  //- check email and password
  const { email, password } = req.body;
  //- operate accountValidator
  const result = accountValidator(email, password);
  if (result.invalidMsg) {
    const { invalidMsg } = result;
    return res.render("index", { invalidMsg });
  }
  //! set seesion for user's login record
  const { firstName } = result;
  req.session.isAuthenticated = true;
  req.session.firstName = firstName;
  //! redirect to user's profile
  return res.redirect("/profile");
});

app.get("/profile", (req, res) => {
  //! if login successfully
  if (req.session.isAuthenticated) {
    const { firstName } = req.session;
    return res.render("profile", { firstName });
  }
  //! Otherwise, redirect to login page
  return res.redirect("/");
});

//- listen to server
app.listen(port, () => {
  console.log(`Server is listening to http://localhost:${port}`);
});
