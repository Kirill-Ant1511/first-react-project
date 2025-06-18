import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './pages/home/App.jsx'
import { ThemeProvider } from './ThemeProvider'
import { MainRoutes } from './MainRoutes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <MainRoutes />
    </ThemeProvider>
  </StrictMode>,
)
