// Determine the base URL based on the host (localhost or Render)
const baseUrl = window.location.host.includes('localhost')
  ? 'http://localhost:3000'
  : 'https://userwiki-oasd.onrender.com';

const linkContainer = document.getElementById('link-container');

//For the Login

// const loginButton = document.getElementById('loginButton');
// const loginWindowContainer = document.getElementById('loginWindowContainer');

// loginButton.addEventListener('click', () => {
//     loginWindowContainer.classList.add('show');
// });

// const loginButton = document.getElementById('loginButton');
// const loginWindowContainer = document.getElementById('loginWindowContainer');

// loginButton.addEventListener('click', () => {
//   loginWindowContainer.innerHTML = `
//       <div id="loginWindow">
//           <h2 id="loginH2">Welcome Back</h2>
//           <form action="/login" method="POST">
//               <label for="email" class="top">Email:<input type="email" id="email" name="email" required></label>
              
//               <label for="password" class="top">Password:<input type="password" id="password" name="password" required></label>
              
//               <button type="submit">Login</button>
//           </form>
          
//           <hr>
          
//           <p>Or sign in with:</p>
//           <button id="googleSignInButton">Sign In with Google</button>
          
//           <p>Don't have an account? <a href="/register">Register</a></p>
//       </div>
//   `;

//   loginWindowContainer.classList.add('visible');
// });

// google.accounts.id.renderButton(
//   document.getElementById('googleSignInButton'),
//   { theme: 'outline_dark' }
// );

/***********LOGIN/REGISTRATIOn/DASHBOARD PAGE JS CODE - By Jose - I just want to add my js here instead of putting it on the html************** */

// Function to get query parameters from the URL
function getQueryParams() {
  const urlParams = new URLSearchParams(window.location.search);
  return Object.fromEntries(urlParams.entries());
}

// Check if the 'success' or 'error' query parameter is present
const queryParams = getQueryParams();
const messageDiv = document.getElementById('message');

if (queryParams.success === 'true') {
  // Show the success message div
  messageDiv.textContent = 'Success! You have been registered successfully. You can now log in.';
  // messageDiv.classList.add('bg-green-100', 'border-green-400', 'text-green-800');
  messageDiv.classList.remove('hidden');
} else if (queryParams.error === 'true') {
  // Show the error message div
  messageDiv.textContent = 'Error! There was a problem with the registration process.';
  messageDiv.classList.add('bg-red-100', 'border-red-400', 'text-red-800');
  messageDiv.classList.remove('hidden');
}






