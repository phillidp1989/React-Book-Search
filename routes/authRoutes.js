const router = require("express").Router();
const passport = require("passport");
const { authCheck } = require("../middleware/auth");

router.get("http://localhost:3000", authCheck, (req, res) => {
  res.status(200);
})

router.get(
  "/auth/github",
  passport.authenticate("github", { scope: ["user:email"] })
);

router.get(
  "/auth/github/redirect",
  passport.authenticate("github", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("http://localhost:3000/search");
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
    res.redirect("http://localhost:3000/search");
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
    res.redirect("http://localhost:3000/search");
  }
);

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("http://localhost:3000/login");
});

router.get("/api/user", (req, res) => {
  console.log(req.user);
  res.send({ user: req.user });
});

module.exports = router;
