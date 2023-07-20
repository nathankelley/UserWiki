const dotenv = require('dotenv');
dotenv.config();
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const db = require('../models');
const User = db.users;

module.exports = new GoogleStrategy({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.SECRET,
  callbackURL: 'https://userwiki-oasd.onrender.com/auth/google/redirect',
  passReqToCallback: true
}, (req, accessToken, refreshToken, profile, done) => {
  // Implement your logic to handle the authenticated user profile
  // This callback will be triggered after successful Google OAuth authentication
  req.session.user = profile; // Store the user profile in the session
  return done(null, profile); // Call the done callback to indicate successful authentication
});
