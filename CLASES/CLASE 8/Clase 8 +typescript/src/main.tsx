import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Counter from './components/counter.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Counter />
  </StrictMode>,
)
