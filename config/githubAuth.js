const passport = require("passport");
const User = require("../models/User");
const GitHubStrategy = require("passport-github2").Strategy;

require("dotenv").config();

passport.serializeUser((user, done) => {
  done(null, user.providerId);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findOne({ providerId: id });
    done(null, user);
  } catch (err) {
    console.log("ERROR - gitHubAuth.js - deserializeuser", err);
  }
});

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "http://localhost:3001/auth/github/redirect",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const result = await User.findOne({ providerId: profile.id });
        if (result) {
          done(null, result);
        } else {
          const user = await new User({
            provider: "GitHub",
            providerId: profile.id,
            username: profile.username,            
            displayName: profile.displayName,
            avatar: profile.photos[0].value,
            isDeveloper: true
          }).save();
          done(null, user);
        }
      } catch (err) {
        console.log("ERROR - gitHubAuth.js - GitHubStrategy", err);
      }
    }
  )
);
