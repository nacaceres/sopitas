const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const session = require("express-session");

const User = require("../models/user-local-model");

require("dotenv").config();

const configureAuthLocal = app => {
  const authenticateUser = async (email, password, done) => {
    const user = User.findOne({ email });
    if (user === null) {
      return done(null, false, { message: "No user with that email" });
    }

    try {
      if (await bcrypt.compare(password, user.password)) {
        return done(null, user);
      } else {
        return done(null, false, { message: "Password incorrect" });
      }
    } catch (err) {
      return done(err);
    }
  };

  passport.use(new LocalStrategy({ usernameField: "email" }, authenticateUser));

  passport.serializeUser((user, done) => done(null, user.id));

  passport.deserializeUser((id, done) => {
    const user = User.findById(id);
    done(null, user);
  });

  app.use(
    session({
      cookie: {},
      resave: false,
      saveUninitialized: false,
      secret: process.env.SESSION_SECRET
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());
};

module.exports = configureAuthLocal;
