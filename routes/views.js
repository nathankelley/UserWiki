const routes = require('express').Router();
const path = require('path');

routes.use('/login', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../frontend/login.html'));
  });
  routes.use('/register', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../frontend/register.html'));
  });

  routes.use('/dashboard', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../frontend/dashboard.html'));
  });
  
  routes.use('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
  });