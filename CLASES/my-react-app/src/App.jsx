import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const container=document.querySelector('#root');
const root = createRoot(container);

function App() {
  const miDiv=document.createElement('div');
  const p=document.createElement('p');
  p.textContent="When eres el papu y creas tu propia app en react :v"
  miDiv.appendChild(p);
  const [count, setCount] = useState(0)
 root.render(miDiv);
}

export default App
