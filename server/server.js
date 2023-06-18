const express = require('express');
// const bodyParser = require('body-parser');
// const {auth} = require('express-openid-connect');
// const authConfig = require('./config/auth0.config.js');
// const port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});
// //connects to auth0
// app.use(auth(authConfig.config));

// //connect to routes folder
// app.use('/', require('./routes'));

//connect to db
