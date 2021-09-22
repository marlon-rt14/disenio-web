const express = require("express");
const morgan = require("morgan");
const exphbs = require("express-handlebars");
const path = require("path");
const flash = require("connect-flash");
const session = require("express-session");
const MySQLStore = require("express-mysql-session")(session);
const passport = require('passport');


const { database } = require("./keys");

// initalizations
const app = express();
require('./lib/passport');

// settings
// si existe un puerto en el sistema, tomalo, caso contrario usa el 4000
app.set("port", process.env.PORT || "4000"); // o en caso de haya un puerto en el SO
app.set("views", path.join(__dirname, "views"));

app.engine(
  ".hbs",
  exphbs({
    defaultLayout: "main", // la carpeta donde esta el diseño por defecto
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
    helpers: require("./lib/handlebars"),
  })
);

app.set("view engine", ".hbs");

// middlewares
app.use( // configurar la sesion 
  session({
    secret: "faztmysqlnodesession", // como va a empezar a guardar las sesiones
    resave: false, // para que nos e empieze a renovar la sesion 
    saveUninitialized: false, // para que no se vuelva a establecer la sesion 
    store: new MySQLStore(database), // en donde queremos guardar la sesion 
  })
);
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// global variables
app.use((req, res, next) => {
  // req.session;
  app.locals.success = req.flash("success");
  app.locals.message = req.flash("message");
  app.locals.user = req.user;
  // app.locals.user = req.session.passport.user;
  // console.log(req.session.passport.user);
  next();
});

// Routes
app.use(require("./routes"));
app.use(require("./routes/authentication"));
app.use("/links", require("./routes/link"));

// Public
app.use(express.static(path.join(__dirname, "public")));

// Starting the server
app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});
