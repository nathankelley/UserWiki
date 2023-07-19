const db = require('../models');
const User = db.users;
const bcrypt = require('bcrypt');

async function authLocal(username, password) {
    try {
      // Find the user in the database based on the provided username
      const user = await User.findOne({ username });
  
      // If the user is not found, return 'failure'
      if (!user) {
        return 'failure';
      }
  
      // Compare the provided password with the hashed password stored in the database
      const isPasswordValid = await bcrypt.compare(password, user.password);
  
      // If the passwords match, return 'success'
      // Otherwise, return 'failure'
      return isPasswordValid ? 'success' : 'failure';
    } catch (err) {
      // Handle any errors that occurred during authentication
      console.error('Error during local authentication:', err);
      return 'failure';
    }
  }

// async function authLocal(username, password) {
//     try {
//         console.log(username + "" + password);
//       // Find the user in the database based on the provided username
//       const user = await User.findOne({ username });
  
//       // If the user is not found, return 'failure'
//       if (!user) {
//         return 'failure';
//       }
  
//       // Compare the provided password with the password stored in the database
//       const isPasswordValid = password === user.password;
  
//       // If the passwords match, return 'success'
//       // Otherwise, return 'failure'
//       return isPasswordValid ? 'success' : 'failure';
//     } catch (err) {
//       // Handle any errors that occurred during authentication
//       console.error('Error during local authentication:', err);
//       return 'failure';
//     }
//   }

const checkOrCreateUser = async (req, res, next) => {
    try {
      const email = req.session.passport.user;
      // Check if the user with the email exists in the database
      const existingUser = await User.findOne({ email });
  
      if (!existingUser) {
        // If the user doesn't exist, create a new user in the database
        const newUser = new User({
          email,
          // You can add other user properties as needed for a new user
        });
  
        // Save the new user to the database
        await newUser.save();
  
        // Store the new user's details in the session for future use
        req.session.user = {
          _id: newUser._id,
          email: newUser.email,
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          // You can add other user properties here if needed
        };
      } else {
        // If the user exists, store their details in the session
        req.session.user = {
          _id: existingUser._id,
          email: existingUser.email,
          firstName: existingUser.firstName,
          lastName: existingUser.lastName
          // You can add other user properties here if needed
        };
  
        // Log the user information from the session to the console
        console.log('User Information from Session:', req.session.user);
      }
  
      // Move to the next middleware or route handler
      next();
    } catch (error) {
      // Handle any errors that occur during user creation or database operations
      res.status(500).json({ error: 'Error creating user or database operation.' });
    }
  };
  
  module.exports = {
    authLocal,
    checkOrCreateUser
  };
