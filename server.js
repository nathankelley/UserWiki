const express = require('express');
const bodyParser = require('body-parser');
//const {auth} = require('express-openid-connect');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const port = process.env.PORT || 3000;
const googleOAuthConfig = require('./config/googleOauth.config.js');


const app = express();
// Serve static files from the frontend folder
app.use(express.static('frontend', { index: false }));


// The body parse
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

// Connect to Google OAuth
// const passport = require('passport');

// passport.use(new GoogleStrategy(
//   googleOAuthConfig.config, 
//   (accessToken, refreshToken, profile, done) => {
//   // Implement your logic to handle the authenticated user profile
//   // This callback will be triggered after successful Google OAuth authentication
// }));


// Authentication route
// app.get('/api/sessions/oauth/google', authConfig.authenticate('google', { scope: ['profile', 'email'] }));

// // Callback route
// app.get('/auth/google/callback', authConfig.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
//   // Handle successful authentication
//   res.redirect('/dashboard');
// });



// Connect to routes folder
app.use('/', require('./routes'));



// Login Route
app.get('/pokemon_index', (req, res) => {
  // Render the pokemon page here
  res.sendFile('pokemon_index.html', { root: 'frontend' });
});

// app.use(passport.initialize());
// app.use(passport.session());

// Connect to the database and start the server
const db = require('./models');
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'UserWiki'
  })
  .then(() => {
    // Listen on the specified port
    app.listen(3000, () => {
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch(err => {
    console.log('Cannot connect to the database!', err);
    process.exit();
  });
