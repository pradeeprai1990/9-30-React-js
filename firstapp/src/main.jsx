import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { Header } from './Header.jsx'
import { Home } from './Home.jsx'

let rootElement = document.getElementById("root")

createRoot(rootElement).render(
  <>
 
    <Header />
    <Header></Header>
    <Header></Header>
    <Home />
  </>

)

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
