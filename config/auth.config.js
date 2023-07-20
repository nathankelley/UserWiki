// const dotenv = require('dotenv');
// dotenv.config();
// const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const User = require('../models/users');

// module.exports = new GoogleStrategy({
//   clientID: '278837145189-lp3a2s8bfldi3k770kof7mcq89n1lt9c.apps.googleusercontent.com',
//   clientSecret: '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',
//   callbackURL: 'http://localhost:3000/auth/google/redirect',
//   passReqToCallback: true
// }, (req, accessToken, refreshToken, profile, done) => {
//     console.log('Google User Profile:', profile); // Log the entire profile object
//     new User({
//       username: profile.displayName,
//       email: profile.email
//     })

//   // Store the user information in the session
//   req.session.user = {
//     email, firstName, lastName
//     // You can add other user properties here if needed
//   };
//   return done(null, profile); // Call the done callback to indicate successful authentication
// });

const dotenv = require('dotenv');
dotenv.config();
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const db = require('../models');
const User = db.users;

module.exports = new GoogleStrategy({
  clientID: '278837145189-lp3a2s8bfldi3k770kof7mcq89n1lt9c.apps.googleusercontent.com',
  clientSecret: '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',
  callbackURL: 'http://localhost:3000/auth/google/redirect',
  passReqToCallback: true
}, (req, accessToken, refreshToken, profile, done) => {
  // Implement your logic to handle the authenticated user profile
  // This callback will be triggered after successful Google OAuth authentication
  req.session.user = profile; // Store the user profile in the session
  return done(null, profile); // Call the done callback to indicate successful authentication
});
