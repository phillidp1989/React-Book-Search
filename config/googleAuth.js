const passport = require("passport");
const User = require("../models/User");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

require("dotenv").config();

passport.serializeUser((user, done) => {
  done(null, user.providerId);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findOne({ providerId: id });
    done(null, user);
  } catch (err) {
    console.log("ERROR - googleAuth.js - deserializeuser", err);
  }
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3001/auth/google/redirect",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const result = await User.findOne({ providerId: profile.id });
        if (result) {
          done(null, result);
        } else {
          console.log(profile);
          const user = await new User({
            provider: "Google",
            providerId: profile.id,
            username: profile.displayName + profile.id,      
            displayName: profile.displayName,
            avatar: profile.photos[0].value,
            isDeveloper: false
          }).save();
          done(null, user);
        }
      } catch (err) {
        console.log("ERROR - googleAuth.js - GoogleStrategy", err);
      }
    }
  )
);