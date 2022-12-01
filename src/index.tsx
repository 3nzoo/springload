import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import './styles.css';

const container = document.getElementById('root');

const root = createRoot(container as Element);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
