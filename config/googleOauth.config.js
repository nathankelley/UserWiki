const dotenv = require('dotenv');
dotenv.config();

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

module.exports = {
  config: {
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.SECRET,
    callbackURL: 'https://userwiki.onrender.com/auth/google/callback'
  },
  session: {
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
  }
};
