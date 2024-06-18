// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HashRouter } from 'react-router-dom'
import { ThemeProvider } from "./components/config/ThemeProvider";
import { PopupStateProvider } from "./components/popup/base/PopupProvider"

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <PopupStateProvider>
    <ThemeProvider defaultTheme="dark" storageKey="theme">
      <HashRouter>
        <App />
      </HashRouter>
    </ThemeProvider>
  </PopupStateProvider>
  // </React.StrictMode>,
)
