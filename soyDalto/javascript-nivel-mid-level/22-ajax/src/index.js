const express = require("express");
const morgan = require("morgan");
const path = require("path");
const { engine } = require("express-handlebars");

// Initalizations
const app = express();

// Settings
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  engine({
    defaultLayout: "index",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
  })
);

app.set("view engine", ".hbs");

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Global Variables

// Routes
app.get("/", (req, res) => {
  res.render("layouts/index");
});

// Public
app.use(express.static(path.join(__dirname, "public")));

// Starting Server
app.listen(app.get("port"), () => {
  console.log("Server started at port " + app.get("port"));
});
