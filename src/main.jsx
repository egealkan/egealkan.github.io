import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom' // <-- NEW: Import HashRouter
import App from './App.jsx'
import './styles/globals.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* NEW: Use HashRouter instead of BrowserRouter */}
    <HashRouter> 
      <App />
    </HashRouter>
  </StrictMode>,
)