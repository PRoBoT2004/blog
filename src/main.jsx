import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Ensure this line is present

const token = import.meta.env.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
console.log("GitHub Token: ", token); 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <App token={token} />
  </React.StrictMode>
);
