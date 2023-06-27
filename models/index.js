const dbConfig = require('../config/db.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.users = require('./users.js')(mongoose);
db.pokemon = require('./Pokemon/pokemon.js')(mongoose);

module.exports = db;
