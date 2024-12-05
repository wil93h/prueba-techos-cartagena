import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './utilities/i18n.js'; 
import 'primereact/resources/themes/saga-blue/theme.css'; // Tema
import 'primereact/resources/primereact.min.css';        // Estilos base de PrimeReact
import 'primeicons/primeicons.css';  

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
