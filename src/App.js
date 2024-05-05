import React from 'react';
import { MsalProvider, useMsal } from '@azure/msal-react';
import { PublicClientApplication } from '@azure/msal-browser';
import './assets/App.css';

// Replace these with your Azure B2C configuration
const msalConfig = {
  auth: {
    clientId: 'YOUR_CLIENT_ID',
    authority: 'https://YOUR_TENANT_NAME.b2clogin.com/YOUR_TENANT_NAME.onmicrosoft.com/YOUR_SIGN_IN_POLICY',
    redirectUri: 'http://localhost:3000',
  },
};

const msalInstance = new PublicClientApplication(msalConfig);

function App() {
  return (
    <MsalProvider instance={msalInstance}>
      <div className="container">
        <header>
          <img src={require('./assets/logo.png')} alt="Azure B2C Logo" className="logo" />
          <h1>Azure B2C Test</h1>
        </header>
        <p>
          This is a simple web application to test the login and logout functionality of Azure B2C.
        </p>
        <LoginLogoutComponent />
      </div>
    </MsalProvider>
  );
}

function LoginLogoutComponent() {
  const { instance, accounts, inProgress } = useMsal();

  const handleLogin = () => {
    instance.loginPopup().catch((e) => console.error(e));
  };

  const handleLogout = () => {
    instance.logoutPopup().catch((e) => console.error(e));
  };

  return (
    <div className="login-logout-container">
      {accounts.length > 0 ? (
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      ) : (
        <button onClick={handleLogin} className="login-button">
          Login
        </button>
      )}
    </div>
  );
}

export default App;