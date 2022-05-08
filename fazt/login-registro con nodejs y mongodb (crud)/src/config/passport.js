const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const User = require("../models/User");

passport.use(
  "local-signin",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, email, password, done) => {
      let user = await User.findOne({ email: email });
      // console.log(user);
      if (!user) {
        console.log("not user");
        return done(
          null,
          false,
          req.flash("error_msg", "This username or password does not exist")
        );
        // return done(null, false, req.flash("error_msg", "Not user found"));
      } else {
        const match = await user.matchPassword(password);
        if (match) {
          let currentUser = await JSON.stringify(user);
          let auxUser = await JSON.parse(currentUser);
          console.log(auxUser);
          return done(
            null,
            auxUser,
            req.flash("success_msg", `Welcome back ${user.name}`)
          );
        } else {
          return done(
            null,
            false,
            req.flash("error_msg", "Username or password are incorrects")
          );
          // return done(null, false, req.flash("error_msg", "Incorrect password"));
        }
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});
