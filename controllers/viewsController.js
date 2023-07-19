const path = require('path');

module.exports.loginHandler = async(req, res, next) => {
    res.sendFile(path.join(__dirname, '../frontend/login.html'));
}

module.exports.regHandler = async(req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/register.html'));
}

module.exports.dashboardHandler = async(req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dashboard.html'));
}

module.exports.pokemonPageHandler = async(req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/pokemon_index.html'));
}

module.exports.eldenringPageHandler = async(req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/eldenring_index.html'));
}

module.exports.haloPageHandler = async(req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/halo_index.html'));
}