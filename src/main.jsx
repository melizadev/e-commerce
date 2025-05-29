import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Mainlayout from './mainlayut/mainlayout'
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Mainlayout />
  </StrictMode>,
)
