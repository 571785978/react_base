// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HashRouter } from 'react-router-dom'
import { ThemeProvider} from "./components/config/ThemeProvider";

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="theme">
        <HashRouter>
            <App />
        </HashRouter>
    </ThemeProvider>
  // </React.StrictMode>,
)
