const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID =
  "332044309099-cbts2pnh4h02j5agh348323qejo0h1kk.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

const GITHUB_CLIENT_ID = "d4c30157e591186e5cb7";
const GITHUB_CLIENT_SECRET = "2967911c7d32178a983b3b0ae4f9b10505454049";


const FACEBOOK_CLIENT_ID = "232572759707247";
const FACEBOOK_CLIENT_SECRET = "cc6fa58b7871c48b37ec8b01f2fd9480";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_CLIENT_ID,
      clientSecret: FACEBOOK_CLIENT_SECRET,
      callbackURL: "/auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new GithubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});
