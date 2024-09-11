import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {GoogleOAuthProvider} from "@react-oauth/google"
// import './assets/js/index'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId='477122918435-b2bniroo84p6uq0u928neb2dnt6382pb.apps.googleusercontent.com'>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </GoogleOAuthProvider>
);
