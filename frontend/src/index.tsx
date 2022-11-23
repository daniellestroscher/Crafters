import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import { UserState } from './context/UserState';
import { env } from './helpers/env';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as Element);
root.render(
  <React.StrictMode>
    <Auth0Provider domain={env.domain} clientId={env.clientId} redirectUri={window.location.origin}>
      <UserState>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UserState>
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
