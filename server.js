const express = require('express');
const bodyParser = require('body-parser');
// const {auth} = require('express-openid-connect');
// const authConfig = require('./config/auth0.config.js');
const port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});
//connects to auth0
// app.use(auth(authConfig.config));


//connect to routes folder
app.use('/', require('./routes'));

// Login Route
app.get('/pokemon_index', (req, res) => {
  // Render the pokemon page here
  res.sendFile('pokemon_index.html', { root: 'frontend/Pokemon/' });
});

//connect to db
const db = require('./models');
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    // Listen on Port 3000
    app.listen(3000, () => {
      console.log('Server listening on port 3000');
    });

  })
  .catch(err => {
    console.log('Cannot connect to the database!', err);
    process.exit();
  });