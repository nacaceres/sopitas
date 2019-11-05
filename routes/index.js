const express = require("express");
const router = express.Router();
const path = require("path");
const passport = require("passport");
const app = express();

const MyMongoLib = require("../MyMongoLib");
const myMongoLib = MyMongoLib();

/* GET home page. */
router.get("/", function(req, res) {
  res.render("index", { title: "Express" });
});

router.get("/data", (req, res) => {
  console.log("Get data");
  myMongoLib
    .getDocs()
    .then(docs => {
      console.log("docs");
      res.send(docs);
    })
    .catch(err => res.send({ err: true, msg: err }));
});

router.get("/varieties", (req, res) => {
  console.log("Get varieties");
  myMongoLib
    .getVarieties()
    .then(docs => {
      console.log("docs");
      res.send(docs);
    })
    .catch(err => res.send({ err: true, msg: err }));
});

router.post("/order", (req, res) => {
  console.log("Order", req);
  myMongoLib.sendOrder(req, res);
});

/* GET Google Authentication API. */
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/", session: false }),
  function(req, res) {
    var token = req.user.token;
    res.redirect("http://localhost:3000?token=" + token);
  }
);

module.exports = router;
