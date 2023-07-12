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

const loginButton = document.getElementById('loginButton');
const loginWindowContainer = document.getElementById('loginWindowContainer');

loginButton.addEventListener('click', () => {
  loginWindowContainer.innerHTML = `
      <div id="loginWindow">
          <h2 id="loginH2">Welcome Back</h2>
          <form action="/login" method="POST">
              <label for="email" class="top">Email:<input type="email" id="email" name="email" required></label>
              
              <label for="password" class="top">Password:<input type="password" id="password" name="password" required></label>
              
              <button type="submit">Login</button>
          </form>
          
          <hr>
          
          <p>Or sign in with:</p>
          <button id="googleSignInButton">Sign In with Google</button>
          
          <p>Don't have an account? <a href="/register">Register</a></p>
      </div>
  `;

  loginWindowContainer.classList.add('visible');
});

google.accounts.id.renderButton(
  document.getElementById('googleSignInButton'),
  { theme: 'outline_dark' }
);






