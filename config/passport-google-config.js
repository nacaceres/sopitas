const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const session = require("express-session");

const User = require("../models/user-model");

require("dotenv").config();

const configureAuthGoogle = app => {
  // Configure the Google Strategy
  passport.use(
    new GoogleStrategy(
      {
        callbackURL: "/auth/google/callback",
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
      },
      (accessToken, refreshToken, profile, done) => {
        // Check if user already exists in the DB
        User.findOne({ googleId: profile.id }).then(currentUser => {
          if (currentUser) {
            // Already have the user
            console.log("User is", currentUser);
            done(null, currentUser);
          } else {
            // If not, create a new user in the DB
            new User({
              username: profile.displayName,
              googleId: profile.id,
              image: profile._json.picture,
              email: profile._json.email
            })
              .save()
              .then(newUser => {
                console.log("New user created", newUser);
                done(null, newUser);
              });
          }
        });
      }
    )
  );

  // Whe using Passport's session functionality, you need to tell passport
  // how to serialize/deserialize user object to the session store
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
      done(null, user);
    });
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

module.exports = configureAuthGoogle;
