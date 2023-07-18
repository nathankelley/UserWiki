const dotenv = require('dotenv');
dotenv.config();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

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

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.SECRET,
    callbackURL: 'http://localhost:3000/auth/google/callback',
    passReqToCallback: true
  },
  // function(accessToken, refreshToken, profile, cb) {
  //   User.findOrCreate({ googleId: profile.id }, function (err, user) {
  //     return cb(err, user);
  //   });
  // }
  function(request, accessToken, refreshToken, profile, done){
    return done(err, profile);
  }
));

passport.serializeUser(function(user, done){
  done(null, user);

});

passport.deserializeUser(function(user, done){
  done(null, user);

});
