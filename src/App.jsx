import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Flexdemo from './components/Flexdemo'
import Welcome from './components/Welcome'
import Helloclass from './components/Helloclass'
import Login from './components/Login'
import Register from './components/Register'
import Greetings from './components/Greetings'
import Home from './components/Home'
import Datafetch from './components/Datafetch'
import Registration from './components/Registration'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      {/* <Datafetch/> */}
      
      {/* <Login></Login> */}

      {/* <Register></Register> */}

      {/* <Greetings></Greetings> */}
     
      <Home>

      </Home>

      {/* <Flexdemo></Flexdemo> */}

      {/* <Welcome></Welcome>   
      <Helloclass></Helloclass>   */}


     
      {/* <Registration/> */}
      
      
      
      
      
      
      
      
      
      
      {/* /* {<div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 100)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> }*/ }
    </>
  )
}

export default App
