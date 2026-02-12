// src/main.jsx
import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // <--- IMPORTANTE
import './index.css'
import App from './App.jsx'
import ScrollToTop from './ScrollToTop.jsx' // <--- Importás el componente

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* <--- Envuelve la App aquí */}
      <ScrollToTop /> {/* <--- Agregás el componente */}
      <App />
    </BrowserRouter>
  </StrictMode>,
)
