import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { CardLeilao } from './components/cardLeilao'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <CardLeilao></CardLeilao>
      
    </div>
  )
}

export default App
