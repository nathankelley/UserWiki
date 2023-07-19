const path = require('path');

function loginHandler(req, res, next) {
    res.sendFile(path.join(__dirname, '../frontend/login.html'));
}