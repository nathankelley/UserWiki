const db = require('../models');
const User = db.users;
const bcrypt = require('bcrypt');

// async function comparePasswords(password, hashedPassword) {
//   return await bcrypt.compare(password, hashedPassword);
// }

// module.exports.authLocal = async (req, res) => {
//   try {
//     const { username, password } = req.body;

//     // Check the username against the database
//     const user = await User.findOne({ username: username });

//     if (!user || !(await comparePasswords(password, user.password))) {
//       // If the user is not found or the password is incorrect, send an error response
//       res.status(401).json({ message: 'Invalid credentials' });
//       return;
//     }

//     // If the authentication is successful, store the user information in the session
//     req.session.user = {
//       username: user.username,
//       firstName: user.firstName,
//       lastName: user.lastName,
//       // Include other user information you need in the session (excluding the password)
//     };

//     // Redirect the user to the dashboard
//     res.redirect('/dashboard');
//   } catch (err) {
//     // Handle any errors that occurred during authentication
//     console.error('Error during authentication:', err);
//     res.status(500).json({ message: 'An error occurred during login' });
//   }
// };

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
  
  
  module.exports = {
    authLocal,
  };
