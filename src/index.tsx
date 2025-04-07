import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; // Importez BrowserRouter

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* Enveloppez votre composant App avec BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);