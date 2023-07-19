// const dotenv = require('dotenv');
// dotenv.config();
// const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth20').Strategy;

// module.exports(
//   new GoogleStrategy(
//     {
//       clientID: process.env.CLIENT_ID,
//       clientSecret: process.env.SECRET,
//       callbackURL: 'http://localhost:3000',
//     },
//     (accessToken, refreshToken, profile, done) => {
//       // Implement your logic to handle the authenticated user profile
//       // This callback will be triggered after successful Google OAuth authentication
//     }
//   )
// );

// module.exports = {
//   config: {
//     clientID: process.env.CLIENT_ID,
//     clientSecret: process.env.SECRET,
//     callbackURL: 'https://userwiki.onrender.com/auth/google/callback'
//   },
//   session: {
//     secret: process.env.SECRET,
//     resave: false,
//     saveUninitialized: true
//   }
// };

// passport.use(new GoogleStrategy({
//     clientID: process.env.CLIENT_ID,
//     clientSecret: process.env.SECRET,
//     callbackURL: 'http://localhost:3000/auth/google/callback',
//     passReqToCallback: true
//   },
//   // function(accessToken, refreshToken, profile, cb) {
//   //   User.findOrCreate({ googleId: profile.id }, function (err, user) {
//   //     return cb(err, user);
//   //   });
//   // }
//   function(request, accessToken, refreshToken, profile, done){
//     return done(err, profile);
//   }
// ));

// passport.serializeUser(function(user, done){
//   done(null, user);

// });

// passport.deserializeUser(function(user, done){
//   done(null, user);

// });

const dotenv = require('dotenv');
dotenv.config();

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// Local authentication strategy
const User = require('../models/users');

passport.use(
  new LocalStrategy((username, password, done) => {
    // Find a user with the provided username in your database
    User.findOne({ username: username }, (err, user) => {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: 'Incorrect username or password.' });
      }
      // Check if the provided password matches the stored hashed password
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect username or password.' });
      }
      // Authentication successful, return the user object
      return done(null, user);
    });
  })
);


// Google authentication strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: 'your-client-id',
      clientSecret: 'your-client-secret',
      callbackURL: '/auth/google/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      // Replace this with your actual user authentication logic using Google OAuth
      // You can use the `profile` information to create or authenticate the user
      User.findOne({ googleId: profile.id }, (err, user) => {
        if (err) {
          return done(err);
        }
        if (!user) {
          // Create a new user in your database based on the Google profile information
          const newUser = new User({
            googleId: profile.id,
            username: profile.displayName,
          });
          newUser.save((err) => {
            if (err) {
              return done(err);
            }
            return done(null, newUser);
          });
        } else {
          return done(null, user);
        }
      });
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  // Replace this with your actual user retrieval logic from the database
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

module.exports = passport;

