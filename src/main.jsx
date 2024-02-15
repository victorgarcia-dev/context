import React from 'react'
import ReactDOM from 'react-dom/client'
import { PatenteProvider } from './context/PatenteProvider.jsx';
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PatenteProvider>
       <App />
    </PatenteProvider>
    
  </React.StrictMode>,
)
