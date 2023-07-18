const express = require('express');
const bodyParser = require('body-parser');
//const {auth} = require('express-openid-connect');
const port = process.env.PORT || 3000;
require('./config/auth.config');


const app = express();
// Serve static files from the frontend folder
app.use(express.static('frontend', { index: false }));


// The body parse
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

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
