import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom' // gives react router support to App.jsx file
import StoreContextProvider from './Context/StoreContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter> 
  <StoreContextProvider>
  <App />
  </StoreContextProvider>
  </BrowserRouter>  
)
