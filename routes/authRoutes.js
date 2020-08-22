const router = require("express").Router();
const passport = require("passport");
const { authCheck, guestCheck } = require("../middleware/auth");

router.get(
  "/auth/github",
  passport.authenticate("github", { scope: ["user:email"] })
);

router.get(
  "/auth/github/redirect",
  passport.authenticate("github", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("http://localhost:3000/");
  }
);

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/auth/google/redirect",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {    
    res.redirect("http://localhost:3000/");
  }
);

router.get(
  "/auth/facebook",
  passport.authenticate("facebook", { scope: ["email"] })
);

router.get(
  "/auth/facebook/redirect",
  passport.authenticate("facebook", { failureRedirect: "/" }),
  (req, res) => {    
    res.redirect("http://localhost:3000/");
  }
);

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("http://localhost:3000/");
});

router.get("/api/user", (req, res) => {
  console.log(req.user);
  res.send({ user: req.user });
});

module.exports = router;
