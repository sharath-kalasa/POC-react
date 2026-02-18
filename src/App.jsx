import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://www.nuware.com/" target="_blank">
          {/* ✅ FIXED: Use public folder path - NO import needed */}
          <img src="/logo.png" className="logo" alt="Nuware logo" />
        </a>
        {/* <a href="https://react.dev/" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      </div>
      
      <h1>Welcome To Nuware Systems LLP</h1>
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      
      <p className="read-the-docs">
        Click on the Nuware logo to learn more
      </p>
    </>
  )
}

export default App
