import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'; 

import { FakeStoreIndex } from './Component/FakeStore/fakestoreindex'; 
import { Index } from './Component/child-route';
import { CookiesProvider } from 'react-cookie';
import { FakeStore } from './Component/fakestoreAp1/fake-store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CookiesProvider>
  <FakeStore />
  </CookiesProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

