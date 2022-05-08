const router = require("express").Router();
const passport = require("passport");

const User = require("../models/User");
const { isNotAuthenticated } = require("../helpers/auth");

router.get("/users/signin", isNotAuthenticated, (req, res) => {
  res.render("users/signin");
});

router.post(
  "/users/signin",
  isNotAuthenticated,
  passport.authenticate("local-signin", {
    failureFlash: true,
    successRedirect: "/notes",
    failureRedirect: "/users/signin",
  })
);

router.get("/users/signup", isNotAuthenticated, (req, res) => {
  res.render("users/signup");
});

router.post("/users/signup", isNotAuthenticated, async (req, res) => {
  const { name, email, password, confirm_password } = req.body;
  const errors = [];
  if (name.length <= 0) {
    errors.push({ text: "Please insert your Name" });
  }
  if (email.length <= 0) {
    errors.push({ text: "Please insert your E-mail" });
  }
  if (password !== confirm_password) {
    errors.push({ text: "Password do not match" });
  }
  if (password.length <= 4) {
    errors.push({ text: "Password must be at least 4 characters" });
  }
  if (errors.length > 0) {
    res.render("users/signup", {
      errors,
      name,
      email,
      password,
      confirm_password,
    });
  } else {
    const emailUser = await User.findOne({ email: email });
    if (emailUser) {
      req.flash("error_msg", "The Emais is already in use");
      res.redirect("/users/signup");
    }
    const newUser = await new User({ name, email, password });
    newUser.password = await newUser.encryptPassword(password);
    await newUser.save();
    req.flash("success_msg", "You are registered");
    res.redirect("/users/signin");
  }
});

router.get("/users/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;
