import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from './assets/global/navbar/navbar';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
      <App />
    </div>
  </StrictMode>,
)
