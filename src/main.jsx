import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { registerSW } from 'virtual:pwa-register'

// handle the beforeinstallprompt event 
window.addEventListener('beforeinstallprompt', e => {
  // prevent the install dialog from appearing too early
  e.preventDefault();

  // store the event for later use
  window.deferredPrompt = e;
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

registerSW({
  onNeedRefresh() { },
  onOfflineReady() { },
})

