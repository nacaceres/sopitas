const router = require("express").Router();

const authCheck = (req, res, next) => {
  if (!req.user) {
    // if user is not log in
    res.redirect("/auth/login");
  } else {
    // if log in
    next();
  }
};

router.get("/", authCheck, (req, res) => {
  res.send("you are log in this is your profile" + req.user.username);
});

module.exports = router;
