import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Summary2 from './summary2/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Summary2/>
  </StrictMode>,
)
