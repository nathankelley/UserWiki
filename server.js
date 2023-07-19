const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const session = require('express-session');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

authConfig = require('./config/auth.config');


const app = express();

// Configure the session middleware
app.use(
  session({
    secret: 'secret', // Replace with a secret key for session encryption
    resave: false,
    saveUninitialized: true,
  })
);

// Initialize passport and session middleware
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new GoogleStrategy(
    authConfig.config,
    (accessToken, refreshToken, profile, done) => {
      // Implement your logic to handle the authenticated user profile
      // This callback will be triggered after successful Google OAuth authentication
    }
  )
);




// // Serve static files from the frontend folder
app.use(express.static('frontend', { index: false }));

// The body parse
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

// Serve index.html file
app.get('/', (req, res) => {
  res.sendFile('index.html', { root: 'frontend' });
});

// Connect to routes folder
app.use('/', require('./routes'));


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
      console.log(`Connected to db. Server listening on port ${port}`);
    });
  })
  .catch(err => {
    console.log('Cannot connect to the database!', err);
    process.exit();
  });
