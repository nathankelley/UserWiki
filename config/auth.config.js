const dotenv = require('dotenv');
dotenv.config();
const GoogleStrategy = require('passport-google-oauth20').Strategy;

module.exports = new GoogleStrategy({
  clientID: '278837145189-lp3a2s8bfldi3k770kof7mcq89n1lt9c.apps.googleusercontent.com',
  clientSecret: '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',
  callbackURL: 'http://https://userwiki-oasd.onrender.com/auth/google/redirect',
  passReqToCallback: true
}, (req, accessToken, refreshToken, profile, done) => {
  // Implement your logic to handle the authenticated user profile
  // This callback will be triggered after successful Google OAuth authentication
  req.session.user = profile; // Store the user profile in the session
  return done(null, profile); // Call the done callback to indicate successful authentication
});
