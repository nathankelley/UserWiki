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

module.exports = new GoogleStrategy(
  {
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.SECRET,
    callbackURL: 'http://localhost:3000/auth/google/redirect',
    passReqToCallback: true,
  },
  async (req, accessToken, refreshToken, profile, done) => {
    console.log('Google User Profile:', profile); // Log the entire profile object

    try {
      // Check if the user with the email exists in the database
      const existingUser = await User.findOne({ email: profile.email });

      if (!existingUser) {
        // If the user doesn't exist, create a new user in the database
        const newUser = new User({
          username: profile.displayName,
          email: profile.emails[0].value,
          firstName: profile.name.givenName,
          lastName: profile.name.familyName,
          password: "",
          birthDate: "",
          profileImg: ""
        });

        // Save the new user to the database
        await newUser.save();

        // Store the user information in the session
        req.session.user = {
          email: profile.email,
          username: profile.displayName,
        };
      } else {
        // If the user exists, store their details in the session
        req.session.user = {
          email: existingUser.email,
          username: existingUser.username,
        };
      }

      return done(null, profile); // Call the done callback to indicate successful authentication
    } catch (error) {
      console.error('Error creating user or database operation:', error);
      return done(error, false); // Call the done callback with an error to indicate authentication failure
    }
  }
);

