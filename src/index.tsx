import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CategoryProvider } from './Contexts/CategoryContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <CategoryProvider>
      <App />
    </CategoryProvider>
  </React.StrictMode>
);
