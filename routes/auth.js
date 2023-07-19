const routes = require('express').Router();
const authController = require('../controllers/authController.js');
const passport = require('passport');

routes.post('/auth/local', async (req, res) => {
    try {
        const {
            username,
            password
        } = req.body;

        // Call the authLocal function from the authController with the username and password
        const result = await authController.authLocal(username, password);

        // Handle the result of the authentication as needed
        if (result === 'success') {
            // If authentication is successful, redirect to the dashboard
            res.redirect('/dashboard');
        } else {
            // If authentication fails, show an error message or redirect to a login failure page
            res.status(401).json({
                message: 'Invalid credentials'
            });
        }
    } catch (err) {
        // Handle any errors that occurred during authentication
        console.error('Error during authentication:', err);
        res.status(500).json({
            message: 'An error occurred during login'
        });
    }
});

// Google Authentication route
routes.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));
//
routes.get('/auth/google/callback', passport.authenticate('google', { 
    successRedirect: '/dashboard', 
    failureRedirect: '/login' 
    })
);




module.exports = routes;