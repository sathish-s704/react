import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Sathish from './sathish'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Sathish />
  </StrictMode>,
)
